class State {
    /**
     * @param {Document} doc
     */
    handleRequest(doc) {
        throw new Error("Method 'handleRequest()' must be implemented.");
    }
}

class Document {
    constructor() {
        this.state = new Draft();
        this.approved = false;
    }

    /**
     * @return {State}
     */
    getState() {
        return this.state;
    }

    /**
     * @param {State} state
     */
    setState(state) {
        this.state = state;
    }

    publish() {
        this.state.handleRequest(this);
    }

    /**
     * @param {boolean} approved
     */
    setApproval(approved) {
        this.approved = approved;
    }

    /**
     * @return {boolean}
     */
    isApproved() {
        return this.approved;
    }
}

class Draft extends State {
    /**
     * @param {Document} doc
     * @return {void}
     */
    handleRequest(doc) {
        doc.setState(new Review());
    }
}

class Review extends State {
    /**
     * @param {Document} doc
     * @return {void}
     */
    handleRequest(doc) {
        if (doc.isApproved()) {
            doc.setState(new Published());
        } else {
            doc.setState(new Draft());
        }
    }
}

class Published extends State {
    /**
     * @param {Document} doc
     * @return {void}
     */
    handleRequest(doc) {
        // Write your code here
    }
}
