"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var AppComponent = (function () {
    function AppComponent() {
        this.userForm = new forms_1.FormGroup({
            name: new forms_1.FormControl('Vishwas', [forms_1.Validators.required, forms_1.Validators.minLength(4), forms_1.Validators.maxLength(10)]),
            email: new forms_1.FormControl(),
            address: new forms_1.FormGroup({
                street: new forms_1.FormControl(),
                city: new forms_1.FormControl(),
                postalcode: new forms_1.FormControl(null, forms_1.Validators.pattern('^[1-9][0-9]{4}$'))
            })
        });
    }
    AppComponent.prototype.onSubmit = function () {
        console.log(this.userForm.value);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map