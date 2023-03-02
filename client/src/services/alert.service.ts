import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

export const alertService = {
    onAlert,
    success,
    error,
    info,
    warn,
    alert,
    clear
};

export const AlertType = {
    Success: 'Success',
    Error: 'Error',
    Info: 'Info',
    Warning: 'Warning'
};

const alertSubject = new Subject();
const defaultId = 'default-alert';

// enable subscribing to alerts observable
function onAlert(id = defaultId) {
    return alertSubject.asObservable().pipe(filter((x: any) => x && x.id === id));
}

// convenience methods
function success(message: any, options: any) {
    alert({ ...options, type: AlertType.Success, message });
}

function error(message: any, options: any) {
    alert({ ...options, type: AlertType.Error, message });
}

function info(message: any, options: any) {
    alert({ ...options, type: AlertType.Info, message });
}

function warn(message: any, options: any) {
    alert({ ...options, type: AlertType.Warning, message });
}

// core alert method
function alert(alert: any) {
    alert.id = alert.id || defaultId;
    alert.autoClose = (alert.autoClose === undefined ? true : alert.autoClose);
    alertSubject.next(alert);
}

// clear alerts
function clear(id = defaultId) {
    alertSubject.next({ id });
}