export interface Subject{
    addObserver(o:Observer):any;
    removeObserver():any;
    notifyObservers():any;
}

export interface Observer{
    update():any;
}

export interface DisplayElement{
    display():any;
}
