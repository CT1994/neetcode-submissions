class Observer {
    /**
     * @param {string} itemName
     */
    notify(itemName) {
        throw new Error("Method 'notify()' must be implemented.");
    }
}

class Customer extends Observer {
    /**
     * @param {string} name
     */
    constructor(name) {
        super();
        this.name = name;
        this.notifications = 0;
    }

    /**
     * @param {string} itemName
     */
    notify(itemName) {
        this.notifications += 1;
    }

    /**
     * @return {number}
     */
    countNotifications() {
        return this.notifications;
    }
}

class OnlineStoreItem {
    /**
     * @param {string} itemName
     * @param {number} stock
     */
    constructor(itemName, stock) {
        this.itemName = itemName;
        this.stock = stock;
        this.observers = new Set();
    }

    /**
     * @param {Observer} observer
     */
    subscribe(observer) {
        this.observers.add(observer);
    }

    /**
     * @param {Observer} observer
     */
    unsubscribe(observer) {
        this.observers.delete(observer);
    }

    /**
     * @param {number} newStock
     */
    updateStock(newStock) {
        if (this.stock === 0 && newStock > 0) {
            this.observers.forEach((ob) => ob.notify(this.itemName));
        }
        this.stock = newStock;
    }
}
