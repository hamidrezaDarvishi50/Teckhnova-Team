// const setCookie = (tokens) => {
//   document.cookie = `accessToken=Bearer ${tokens};max-age=${
//   60*60
//   }path=/`;
//   document.cookie = `refreshToken=Bearer ${tokens};max-age=${
//     30 * 1 * 24 * 60 * 60
//   };path=/`;
// };
//
// const getCookie = (cookiName) => {
//   // return document.cookie.split(";")[0].split("=")[1]
//
//
//   return document.cookie
//     .split(";")
//     .find((item) => item.split("=")[0].includes(cookiName))
//     ?.split("=")[1];
// };
//
// const removeCookie = () => {
//   document.cookie = `accessToken= ; max-age=0`;
//   document.cookie = `refreshToken= ; max-age=0`;
// };


export function setCookie(tokens) {
  if (typeof document === "undefined") return;

  document.cookie = `accessToken=${encodeURIComponent(
      tokens.access
  )}; max-age=3600; path=/; SameSite=Lax`;

  document.cookie = `refreshToken=${encodeURIComponent(
      tokens.refresh
  )}; max-age=${30 * 24 * 60 * 60}; path=/; SameSite=Lax`;
};

export const getCookie = (cookieName) => {
  if (typeof document === "undefined") return null;

  const cookie = document.cookie
      .split("; ")
      .find((item) => item.startsWith(`${cookieName}=`));

  return cookie
      ? decodeURIComponent(cookie.substring(cookieName.length + 1))
      : null;
};

export const removeCookie = () => {
  if (typeof document === "undefined") return;

  document.cookie = "accessToken=; max-age=0; path=/";
  document.cookie = "refreshToken=; max-age=0; path=/";
};
const getRole = (tokens) => {
  //roles : customer , admin
  return JSON.parse(atob(tokens.split(".")[1])).role;
};

export { setCookie, getCookie, removeCookie, getRole };
