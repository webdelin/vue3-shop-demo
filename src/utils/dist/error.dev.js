"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.error = error;
var ERROR_CODES = {
  EMAIL_NOT_FOUND: 'Пользователь с таким email не был найден',
  INVALID_PASSWORD: 'Пароль неверный',
  auth: 'Пожалуйста войдите в систему',
  admin: 'Вы должны быть администратором!'
};

function error(code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная Fehler';
}