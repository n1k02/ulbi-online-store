import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Смартфоны'},
            {id: 2, name: 'Машины'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Телевизоры'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'BMW'},
            {id: 4, name: 'Xiaomi'},
            {id: 5, name: 'Asus'},
        ]
        this._devices = [
            {id: 1, name: "14 pro", price: 14000, rating:0, img: 'eb55c2c3-8519-4351-8cf1-a474faa28e53.jpg'},
            {id: 2, name: "S20+", price: 3000, rating:0, img: "632a2d08-f84c-4d8d-9699-cc6cbadfb5b8.jpg"},
            {id: 3, name: "M3 gtr", price: 150000, rating:0, img: "421f0751-cee2-43e8-804d-75e82be2adac.jpg"},
            {id: 4, name: "14 pro", price: 14000, rating:0, img: 'eb55c2c3-8519-4351-8cf1-a474faa28e53.jpg'},
            {id: 5, name: "S20+", price: 3000, rating:0, img: "632a2d08-f84c-4d8d-9699-cc6cbadfb5b8.jpg"},
            {id: 6, name: "M3 gtr", price: 150000, rating:0, img: "421f0751-cee2-43e8-804d-75e82be2adac.jpg"},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}