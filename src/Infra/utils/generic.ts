import { response } from 'express';
import axios, { AxiosInstance } from 'axios';
import { Moment } from 'moment';
export class generic {
  //================= TIME ==============
  static getDateTime(format: string) {
    var dateFormat = require('dateformat');
    var moment = require('moment-timezone');
    var dNow = moment()
      .tz('America/La_Paz')
      .format();

    if (format == 'isoUtcDateTime') {
      // var literal = moment.utc(dNow).valueOf();
      // console.log('literal :>> ', literal);
      return dNow;
    }

    var literal = dateFormat(dNow, format);

    return literal;
  }
  static getDateBoliviaMoment(): Moment {
    var moment = require('moment-timezone');
    var dNow = moment()
      .tz('America/La_Paz');
    return dNow;
  }

  static stringToDate(_date, _format, _delimiter) {
    var formatLowerCase = _format.toLowerCase();
    var formatItems = formatLowerCase.split(_delimiter);
    var monthIndex = formatItems.indexOf('mm');
    var dayIndex = formatItems.indexOf('dd');
    var yearIndex = formatItems.indexOf('yyyy');

    if (_delimiter != '') {
    }

    var dateItems = _date.split(_delimiter);

    var month = parseInt(dateItems[monthIndex]);
    month -= 1;
    var formatedDate = new Date(
      dateItems[yearIndex],
      month,
      dateItems[dayIndex],
    );
    return formatedDate;
  }

  static getDateTimeFormat(date: Date, format: string) {
    var dateFormat = require('dateformat');
    var literal = dateFormat(date, format);
    return literal;
  }
  public static calculateSeconds(startDate) {
    var seconds = (new Date().getTime() - startDate.getTime()) / 1000;
    return seconds;
  }

  public static getDateFromTransactionNumber(transactionNumber: string): Date {
    let year = transactionNumber.substring(0, 4);
    let month = transactionNumber.substring(4, 6);
    let day = transactionNumber.substring(6, 8);
    var moment = require('moment-timezone');
    let date = new Date(+year, +month, +day);
    return date;
  }

  public static getCorrelative(transactionNumber: string): number {
    let correlative = +transactionNumber.substring(8, transactionNumber.length);
    return correlative;
  }

  // ==================== STRING ====================

  public static padLeft(myString: string, width: number, leftCharacter?): string {
    leftCharacter = leftCharacter || '0';
    myString = myString + '';
    return myString.length >= width
      ? myString
      : new Array(width - myString.length + 1).join(leftCharacter) + myString;
  }

  static hasValue(cadena: string): boolean {
    return cadena != null && cadena.trim() != '';
  }
  static isJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  // ==================== MAP ====================
  public static getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  // ==================== GET REQUEST ====================
  // public static getKeyByValue(object, value) {
  //   return Object.keys(object).find(key => object[key] === value);
  // }
  public static parametersToGetFormat(parameters) {
    let response = '?';
    Object.entries(parameters).forEach(([key, value]) => {
      if (value == null || value == '') {
        response = response + key + '=&';
      } else {
        response = response + key + '=' + value + '&';
      }
    });
    return response.slice(0, -1);
  }





  public static async UrlToBase64(url: string) {

    try {
      const response = await axios({
        url: url.trim(),
        responseType: 'arraybuffer',
        headers: {
          'Content-type': 'application/pdf',
        },
      });

      const data = response.data;
      var base64File = Buffer.from(data, 'base64').toString('base64');
      return base64File;
    } catch (error) {
      console.log('UrlToBase64 :>> ' + url, error);
      throw new Error("Error al obtener la factura.");
    }
  }


  // ==================== ARRAY ====================

  public static isArray(parameter) {
    return Object.prototype.toString.call(parameter) === '[object Array]';
  }
  // ==================== Number ====================
  public static getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  // ==================== ERROR ====================

  public static getErrorResponse(error: any, specificMsg = '') {
    if (error == 'undefined') return 'Error no controlado.';

    let msgError = error.data ?? specificMsg;
    if (error.response && error.response.data) {
      msgError = '';
      if (generic.isArray(error.response.data)) {
        let array = error.response.data;
        array.forEach(element => {
          msgError += element + ' - ';
        });
        return msgError;
      }
      if (error.response.data.Message) {
        msgError = error.response.data.Message;
        return msgError;
      }
      if (error.response.data.message) {
        msgError = error.response.data.message;
        return msgError;
      }
      msgError = error.response.data;
    }
    if (msgError == '') {
      msgError = error.message ?? '';
    }
    return msgError;
  }
}
