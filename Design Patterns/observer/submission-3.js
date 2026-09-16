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
        this.subscribers = new Set();
    }

    /**
     * @param {Observer} observer
     */
    subscribe(observer) {
        this.subscribers.add(observer);
    }

    /**
     * @param {Observer} observer
     */
    unsubscribe(observer) {
        this.subscribers.delete(observer);
    }

    /**
     * @param {number} newStock
     */
    updateStock(newStock) {
        if (this.stock === 0 && newStock > 0) {
            this.subscribers.forEach((sub) => {
                sub.notify(this.itemName);
            });
        }
        this.stock = newStock;
    }
}
