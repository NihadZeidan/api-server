'use strict';


class Collection {
    constructor(model) {
        this.id = 0;
        this.model = model;
    }


    create(obj) {
        let newItem = new this.model(obj);
        newItem._id = ++this.id;
        return newItem.save();
    }



    get(id) {
        if (id) {
            return this.model.find({ _id: id });
        } else {
            return this.model.find({});
        }

    }

    update(id, obj) {
        let updated = this.model.findByIdAndUpdate(id, obj, { new: true });
        return updated

    }

    delete(id) {

        let toDelete = this.model.findByIdAndDelete(id);

        return null
    }
}

module.exports = Collection;