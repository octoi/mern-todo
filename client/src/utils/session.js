import jwtDecode from "jwt-decode";
import cookie from "js-cookie";

export function decodeToken(token) {
  const decodedData = jwtDecode(token);
  if (decodedData.exp * 1000 < Date.now()) return false;

  return decodedData;
}

export function getUser() {
  const token = cookie.get('token');
  if (!token) return false;

  const decodedData = decodeToken(token);
  if (!decodedData) cookie.remove("token");

  return { ...decodedData, token };
}

export function saveToken(token) {
  cookie.set('token', token);
}

export function removeToken() {
  cookie.remove('token');
}