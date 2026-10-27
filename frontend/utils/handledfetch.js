import {toast} from "react-toastify";
import Swal from "sweetalert2";
import {removeCookie} from "./cookie.js";

let hasError = false;
let serverAddress = 'http://192.168.100.95:8000'
// let serverAddress = 'http://localhost:8080/'
// let serverAddress = 'http://86.109.32.1:8080/'
export {serverAddress};
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: "btn btn-[#77B042]",
        cancelButton: "btn btn-danger"
    },
    buttonsStyling: true
});

function handleError400(error) {
    console.log(error);
    hasError = true
    if (error.message) {
        swalWithBootstrapButtons.fire({
            title: "مشکلی رخ داده است",
            text: error.message,
            icon: "error"
        });
    }else if (error.error){
        swalWithBootstrapButtons.fire({
            title: "مشکلی رخ داده است",
            text: error.error,
            icon: "error"
        });
    }
    else if (error.messages) {
        swalWithBootstrapButtons.fire({
            title: "چند مشکل بوجود آمده است",
            text: '',
            icon: "error"
        });
        for (let message of error.messages) {
            toast.error(message)
        }
    }
    return error
}

function handleError401(error) {
    hasError = true
    localStorage.clear();
    Swal.fire('بروز رسانی توکن...')
     setTimeout(() => window.location = '/', 1000)
    return error , removeCookie()
}

function handleError404(error) {
    console.log(error)
    swalWithBootstrapButtons.fire({
        icon: "error",
        text:error.message,
    })
   toast.error(error.message)
    return error
}

function handleError403(error) {
    hasError = true
    if (error.message) {
        swalWithBootstrapButtons.fire({
            title: "مشکلی رخ داده است",
            text: error.message,
            icon: "error"
        });
    } else if (error.messages) {
        swalWithBootstrapButtons.fire({
            title: "چند مشکل بوجود آمده است",
            text: '',
            icon: "error"
        });
        for (let message of error.messages) {
            console.log(message)
            toast.error(message)
        }
    }
}

function handleError406(error) {
    console.log('server===', error)
    hasError = true

    if (error.message !== undefined) {
        swalWithBootstrapButtons.fire({
            title: "مشکلی رخ داده است",
            text: error.message,
            icon: "error"
        });
        toast.error(error.message)
    } else if (error.messages !== undefined) {
        swalWithBootstrapButtons.fire({
            title: "چند مشکل بوجود آمده است",
            text: '',
            icon: "error"
        });
        for (let message in error.messages) {
            console.log(message)
            toast.error(message)
        }
    }
    return error
}

function handleError418(error) {
    hasError = true
    if (error.message) {
        swalWithBootstrapButtons.fire({
            title: "مشکلی رخ داده است",
            text: error.message,
            icon: "error"
        });
    } else if (error.messages) {
        swalWithBootstrapButtons.fire({
            title: "چند مشکل بوجود آمده است",
            text: '',
            icon: "error"
        });
        for (let message of error.messages) {
            console.log(message)
            toast.error(message)
        }
    }
    return error
}
function handleError409(error) {
    console.log(error)
    swalWithBootstrapButtons.fire({
        title: "409 ارور ",
        text: error.message,
        icon: "error"
    });
    return error
}
function handleError500() {
    hasError = true
    swalWithBootstrapButtons.fire({
        title: "Critical Error! ",
        text: 'Contact Support...',
        icon: "error"
    });
}

function handleErrorUnknown() {
    hasError = true
    swalWithBootstrapButtons.fire({
        title: "Unknown error occured...",
        text: 'Contact Support...',
        icon: "error"
    });
}

function handleTimeout() {
    Swal.fire('مجدد تلاش کنید')
}

async function handledFetch(url, options, onSuccessFunc = () => {
}) {

    // let timeOut=setTimeout(()=>{return handleTimeout()},10000)

    return fetch(serverAddress + url, options)
        .then((response) => {
            // console.log(url)
            // clearTimeout(timeOut)
            switch (response.status) {
                case 200:
                    return response.json().then((res) => onSuccessFunc(res))
                case 201:
                    return response.json().then((res) => onSuccessFunc(res))
                case 204:
                    return onSuccessFunc({
                        success: true,
                        status: response.status,
                        response
                    });
                case 400:
                    return response.json().then((response) => handleError400(response))
                case 401:
                    return handleError401(response)
                case 404:
                    return response.json().then((response) => handleError404(response))
                case 403:
                    return response.json().then((response) => handleError403(response))
                case 406:
                    return response.json().then((response) => handleError406(response))
                case 409:
                    return response.json().then((response) => handleError409(response))
                case 418:
                    return response.json().then((response) => handleError418(response))
                case 500:
                    return handleError500()

                default:
                    handleErrorUnknown()
                    break;
            }


        })
        .then((responseData) => {
            return responseData;
        })
        .catch(error => console.warn(error));

}


export default handledFetch