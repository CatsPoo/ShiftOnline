webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_fault_fault_service__ = __webpack_require__("../../../../../src/app/services/fault/fault.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_time_and_date_time_and_date_service__ = __webpack_require__("../../../../../src/app/services/time_and_date/time-and-date.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bullets_bullets_service__ = __webpack_require__("../../../../../src/app/services/bullets/bullets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hanhayot_hanhayot_component__ = __webpack_require__("../../../../../src/app/hanhayot/hanhayot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__faults_faults_component__ = __webpack_require__("../../../../../src/app/faults/faults.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bullet_bullet_component__ = __webpack_require__("../../../../../src/app/bullet/bullet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manpower_strength_manpower_strength_component__ = __webpack_require__("../../../../../src/app/manpower-strength/manpower-strength.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bullets_list_bullets_list_component__ = __webpack_require__("../../../../../src/app/bullets_list/bullets_list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoute = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__manpower_strength_manpower_strength_component__["a" /* ManpowerStrengthComponent */] },
    { path: 'events-list', component: __WEBPACK_IMPORTED_MODULE_12__bullets_list_bullets_list_component__["a" /* BulletsListComponent */] },
    { path: 'hanhayot', component: __WEBPACK_IMPORTED_MODULE_3__hanhayot_hanhayot_component__["a" /* HanhayotComponent */] },
    { path: 'faults', component: __WEBPACK_IMPORTED_MODULE_4__faults_faults_component__["a" /* FaultsComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__bullets_list_bullets_list_component__["a" /* BulletsListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__bullet_bullet_component__["a" /* BulletComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__manpower_strength_manpower_strength_component__["a" /* ManpowerStrengthComponent */],
                __WEBPACK_IMPORTED_MODULE_3__hanhayot_hanhayot_component__["a" /* HanhayotComponent */],
                __WEBPACK_IMPORTED_MODULE_4__faults_faults_component__["a" /* FaultsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* RouterModule */].forRoot(appRoute),
                __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_15_angular_datatables__["a" /* DataTablesModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_bullets_bullets_service__["c" /* BulletsService */],
                __WEBPACK_IMPORTED_MODULE_1__services_time_and_date_time_and_date_service__["b" /* TimeAndDateService */],
                __WEBPACK_IMPORTED_MODULE_0__services_fault_fault_service__["a" /* FaultService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bullet/bullet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body{\r\n    margin-top: 3%;\r\n    text-align: left;\r\n    height: 100%;\r\n}\r\n\r\n\r\n.textarea_field{\r\n    width: 90%;\r\n    float: left;\r\n    height: 100%;\r\n}\r\n\r\n.labels{\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n.current_contect_update_time{\r\n    margin-left: 5%;\r\n    float: left;\r\n}\r\n.bullet_name{\r\n    float: left;\r\n}\r\n\r\n.last_update, .creation_time{\r\n    float: right;\r\n}\r\n\r\n.creation_time{\r\n    margin-right: 3%;\r\n}\r\n\r\ntextarea{\r\n    width: 100%;\r\n}\r\n\r\n.right_side_of_textarea, .left_side_of_textarea{\r\nheight: 100%;\r\n\r\nmargin-top: 3%;\r\n}\r\n\r\n.left_side_of_textarea{\r\n    float: left;\r\n}\r\n.right_side_of_textarea{\r\n    float: left;\r\n}\r\n\r\n.left_arrow, .right_arrow{\r\n    height: 200%;\r\n}\r\n.left_arrow{\r\n    float: left;\r\n}\r\n\r\n.right_arrow{\r\n    float: right;\r\n}\r\n\r\ntextarea{\r\n    resize: vertical;\r\n    float: left;\r\n}\r\n\r\n.bullet_settings{\r\n    margin-top: 4.5%;\r\n    float: left;\r\n    width: 7%;\r\n    height: 100%;\r\n}\r\n\r\n.save_bullet_btn, .edit_bullet_btn, .remove_bullet_btn{\r\n    width: 90%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bullet/bullet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n        <div class=\"textarea_field\">\r\n                <div class=\"labels\">\r\n                        <div class=\"labels_on_left\">\r\n                                <div class=\"bullet_name\">\r\n                                        <span class=\"bullet_name_tag\">{{bullet.name}}</span>\r\n                                </div>\r\n                                <div class=\"current_contect_update_time\">\r\n                                        <button class=\"btn right_arrow\" (click)=\"newerContent()\"> R </button>\r\n                                        <span class=\"current_contect_update_time_tag\">{{bullet.content[currentContent]._updateTime._day}}/{{bullet.content[currentContent]._updateTime._mounth}}/{{bullet.content[currentContent]._updateTime._year}}</span>\r\n                                        <button class=\"btn left_arrow\" (click)=\"olderContent()\"> L </button>\r\n                                </div>\r\n                        </div>\r\n\r\n                        <div class=\"labels_on_right\">\r\n                                <div class=\"last_update\">\r\n                                        <label class=\"last_update_tag\">Last update:</label>\r\n                                        <span class=\"last_update_value\" id=\"last_update_{{bullet.id}}\">{{bullet.lastUpdate}}</span>\r\n                                </div>\r\n                                <div class=\"creation_time\">\r\n                                        <label class=\"creation_time_tag\">Created at:</label>\r\n                                        <span class=\"creation_time__value\" id=\"creation_time_{{bullet.id}}\">{{bullet.dateOfCreation}}</span>\r\n                                </div>\r\n                        </div>\r\n\r\n                </div>\r\n                <textarea  rows=\"5\" [(ngModel)]=\"bulletContentValue\"></textarea>\r\n        </div>\r\n        <div class=\"bullet_settings\">\r\n                        <button class=\"btn btn-sm btn-primary save_bullet_btn\" id=\"save_bullet_{{bullet.id}}\" (click)=\"saveBullet(bullet)\">\r\n                                <span>Save</span>\r\n                        </button>\r\n                        <br>\r\n                        <button class=\"btn btn-sm btn-danger remove_bullet_btn\" id=\"remove_bullet_{{bullet.id}}\" (click)=\"removeBullet(bullet)\">\r\n                                <span>Remove</span>\r\n                        </button>\r\n                        <br>\r\n                        <a href=\"#\" class=\"btn btn-default\">Default</a>\r\n                        <a href=\"#\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span></a>\r\n                        <ul class=\"dropdown-menu\">\r\n                          <li><a href=\"#\">Action</a></li>\r\n                          <li><a href=\"#\">Another action</a></li>\r\n                          <li><a href=\"#\">Something else here</a></li>\r\n                          <li class=\"divider\"></li>\r\n                          <li><a href=\"#\">Separated link</a></li>\r\n                        </ul>\r\n                </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/bullet/bullet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BulletComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_time_and_date_time_and_date_service__ = __webpack_require__("../../../../../src/app/services/time_and_date/time-and-date.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bullets_bullets_service__ = __webpack_require__("../../../../../src/app/services/bullets/bullets.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BulletComponent = /** @class */ (function () {
    function BulletComponent(bulletsService) {
        this.removeBulletClick = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */]();
        this.currentContent = 0;
        this.readOnly = true;
        this.bulletsService = bulletsService;
    }
    BulletComponent.prototype.ngOnInit = function () {
        this.currentContent = this.bullet.content.length - 1;
        this.bulletContentValue = this.bullet.content[this.currentContent]._content;
    };
    BulletComponent.prototype.newerContent = function () {
        if (this.currentContent < this.bullet.content.length - 1)
            this.currentContent++;
        this.bulletContentValue = this.bullet.content[this.currentContent]._content;
    };
    BulletComponent.prototype.olderContent = function () {
        if (this.currentContent > 0)
            this.currentContent--;
        this.bulletContentValue = this.bullet.content[this.currentContent]._content;
    };
    BulletComponent.prototype.removeBullet = function (bellet) {
        var _this = this;
        this.bulletsService.removeBullet(bellet._id).subscribe(function (res) {
            console.log(res.msg);
            if (res.succsess) {
                //remove seccess from the db
                _this.removeBulletClick.emit(_this.bullet);
            }
        });
    };
    BulletComponent.prototype.saveBullet = function (bullet) {
        var _this = this;
        var newContent = new __WEBPACK_IMPORTED_MODULE_1__services_bullets_bullets_service__["b" /* BulletContent */](this.today, this.bulletContentValue);
        var lastContant = bullet.content[bullet.content.length - 1];
        if (this.today.compare(lastContant._updateTime) == 1) {
            //push new content to the object
            this.bulletsService.addNewContentToBullet(bullet.id, newContent).subscribe(function (res) {
                _this.bullet.content.push(newContent);
            });
        }
        else {
            //change the last update without create new one
            this.bulletsService.updateTodayContentOfBullet(bullet.id, newContent).subscribe(function (res) {
                _this.bullet.content[_this.bullet.content.length - 1] = newContent;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Input */])('bulletData'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_bullets_bullets_service__["a" /* Bullet */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_bullets_bullets_service__["a" /* Bullet */]) === "function" && _a || Object)
    ], BulletComponent.prototype, "bullet", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Input */])('today'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_time_and_date_time_and_date_service__["a" /* Date */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_time_and_date_time_and_date_service__["a" /* Date */]) === "function" && _b || Object)
    ], BulletComponent.prototype, "today", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["P" /* Output */])('removeBulletClick'),
        __metadata("design:type", Object)
    ], BulletComponent.prototype, "removeBulletClick", void 0);
    BulletComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-bullet',
            template: __webpack_require__("../../../../../src/app/bullet/bullet.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bullet/bullet.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_bullets_bullets_service__["c" /* BulletsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_bullets_bullets_service__["c" /* BulletsService */]) === "function" && _c || Object])
    ], BulletComponent);
    return BulletComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=bullet.component.js.map

/***/ }),

/***/ "../../../../../src/app/bullets_list/bullets_list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.buttons_bar{\r\n    margin-top: 2%;\r\n    margin-left: 3%;\r\n}\r\n.add_bullet_btn{\r\n    float: left;\r\n}\r\n\r\n.save_all_bullets_btn{\r\n    margin-left: 1%;\r\n}\r\n\r\n.bullet_item{\r\n    height: 100%;\r\n}\r\n\r\n.labels_on_right{\r\n    float: right;\r\n}\r\n\r\n.labels_on_left{\r\n    float: left;\r\n}\r\n\r\nli{\r\n    padding-bottom: 10%;\r\n}\r\n\r\nul{\r\n    padding-bottom: 30%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bullets_list/bullets_list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"buttons_bar\">\r\n    <button class=\"btn btn-success add_bullet_btn\" (click)=\"addBullet()\">Add bullet</button>\r\n    <button class=\"btn btn-primary save_all_bullets_btn\" (click)=\"saveAllBullets()\">Save all bullets</button>\r\n</div>\r\n<ul>\r\n    <li *ngFor=\"let bullet of this.bullets\">\r\n        <div class=bullet_item>\r\n            <app-bullet (removeBulletClick)=\"handleRemoveClick($event)\" [bulletData]=\"bullet\" [today]=\"this.today\"></app-bullet>\r\n        </div>\r\n    </li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/bullets_list/bullets_list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BulletsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_time_and_date_time_and_date_service__ = __webpack_require__("../../../../../src/app/services/time_and_date/time-and-date.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_bullets_bullets_service__ = __webpack_require__("../../../../../src/app/services/bullets/bullets.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BulletsListComponent = /** @class */ (function () {
    function BulletsListComponent(service, timeAndDateService) {
        var _this = this;
        this.bullets = [];
        this.bulletsService = service;
        this.timeAndDateService = timeAndDateService;
        this.bulletsService.getBullets().subscribe(function (res) {
            res.bullets.forEach(function (element) {
                var tempBullet = new __WEBPACK_IMPORTED_MODULE_2__services_bullets_bullets_service__["a" /* Bullet */](element.name, element.dateOfCreation, element.lastUpdate, element.color, element.content);
                tempBullet.id = element._id;
                _this.bullets.push(tempBullet);
            });
        });
        this.timeAndDateService.getCurrentTime().subscribe(function (res) {
            _this.today = new __WEBPACK_IMPORTED_MODULE_0__services_time_and_date_time_and_date_service__["a" /* Date */](res.year, res.mounth, res.day);
        });
    }
    BulletsListComponent.prototype.ngOnInit = function () {
    };
    BulletsListComponent.prototype.addBullet = function () {
        var _this = this;
        var newBullet = new __WEBPACK_IMPORTED_MODULE_2__services_bullets_bullets_service__["a" /* Bullet */]('New bullet', this.today.toString(), this.today.toString(), 'green', [new __WEBPACK_IMPORTED_MODULE_2__services_bullets_bullets_service__["b" /* BulletContent */](this.today, '')]); //create new bullet with the new data
        this.bulletsService.addBullet(newBullet).subscribe(function (res) {
            console.log(res.msg); //print the response
            if (res.succsess) {
                newBullet.id = res.id; //get the id from the server
                _this.bullets.push(newBullet);
            }
        });
    };
    BulletsListComponent.prototype.handleRemoveClick = function (bullet) {
        var index = this.bullets.indexOf(bullet); //remove bullet from the ui
        this.bullets.splice(index, 1);
    };
    BulletsListComponent.prototype.saveAllBullets = function () {
        this.bullets.forEach(function (element) {
            //   this.saveBullet(element);
        });
    };
    BulletsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-bullets_list',
            template: __webpack_require__("../../../../../src/app/bullets_list/bullets_list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bullets_list/bullets_list.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_bullets_bullets_service__["c" /* BulletsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_bullets_bullets_service__["c" /* BulletsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_time_and_date_time_and_date_service__["b" /* TimeAndDateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_time_and_date_time_and_date_service__["b" /* TimeAndDateService */]) === "function" && _b || Object])
    ], BulletsListComponent);
    return BulletsListComponent;
    var _a, _b;
}());

//# sourceMappingURL=bullets_list.component.js.map

/***/ }),

/***/ "../../../../../src/app/faults/faults.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".direction_right{\r\n    direction: rtl\r\n}\r\n.float_right{\r\n    float: right;\r\n}\r\n\r\n.buttons_bar{\r\n    padding-bottom: 2%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/faults/faults.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"buttons_bar\">\n    <button class=\"btn btn-danger add_bullet_btn\" (click)=\"aa()\">הוספת תקלה</button>\n</div>\n<table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"row-border hover \">\n  <thead class=\"\">\n    <tr>\n      <th>#</th>\n      <th>בסיס</th>\n      <th>אתר/טייסת</th>\n      <th>שרדות/השבתה</th>\n      <th>שעת התחלה</th>\n      <th>שעת סיום</th>\n      <th>איש קשר בבסיס</th>\n      <th>הערות</th> \n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let fault of _faulstList\">\n      <td>{{ fault.id }}</td>\n      <td>{{ fault.base }}</td>\n      <td>{{ fault.site }}</td>\n      <td>\n        <div *ngIf=\"!fault.state; else disables\">ירידה בשרידות</div>\n        <ng-template #disables>השבתה</ng-template>\n      </td> \n      <td>{{ fault.startTime }}</td>\n      <td>{{ fault.endTime }}</td>\n      <td>{{ fault.contact }}</td>\n      <td>{{ fault.remarks }}</td> \n    </tr>\n  </tbody>\n  </table>"

/***/ }),

/***/ "../../../../../src/app/faults/faults.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_fault_fault_service__ = __webpack_require__("../../../../../src/app/services/fault/fault.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FaultsComponent = /** @class */ (function () {
    // We use this trigger because fetching the list of persons can be quite long,
    // thus we ensure the data is fetched before rendering
    //dtTrigger: Subject<any> = new Subject(); 
    function FaultsComponent(faultService) {
        this.faultService = faultService;
        this.dtOptions = {};
        this._faulstList = [];
    }
    FaultsComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 15
        };
        this._faulstList = this.faultService.getFaults();
    };
    FaultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-faults',
            template: __webpack_require__("../../../../../src/app/faults/faults.component.html"),
            styles: [__webpack_require__("../../../../../src/app/faults/faults.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_fault_fault_service__["a" /* FaultService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_fault_fault_service__["a" /* FaultService */]) === "function" && _a || Object])
    ], FaultsComponent);
    return FaultsComponent;
    var _a;
}());

//# sourceMappingURL=faults.component.js.map

/***/ }),

/***/ "../../../../../src/app/hanhayot/hanhayot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hanhayot/hanhayot.component.html":
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "../../../../../src/app/hanhayot/hanhayot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HanhayotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HanhayotComponent = /** @class */ (function () {
    function HanhayotComponent() {
    }
    HanhayotComponent.prototype.ngOnInit = function () {
    };
    HanhayotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hanhayot',
            template: __webpack_require__("../../../../../src/app/hanhayot/hanhayot.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hanhayot/hanhayot.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HanhayotComponent);
    return HanhayotComponent;
}());

//# sourceMappingURL=hanhayot.component.js.map

/***/ }),

/***/ "../../../../../src/app/manpower-strength/manpower-strength.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manpower-strength/manpower-strength.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  manpower-strength works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/manpower-strength/manpower-strength.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManpowerStrengthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManpowerStrengthComponent = /** @class */ (function () {
    function ManpowerStrengthComponent() {
    }
    ManpowerStrengthComponent.prototype.ngOnInit = function () {
    };
    ManpowerStrengthComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-manpower-strength',
            template: __webpack_require__("../../../../../src/app/manpower-strength/manpower-strength.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manpower-strength/manpower-strength.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManpowerStrengthComponent);
    return ManpowerStrengthComponent;
}());

//# sourceMappingURL=manpower-strength.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header{\r\n    padding-bottom: 1%;\r\n    padding-top: 1%;\r\n    font-size: 20px;\r\n}\r\n.title{\r\n    font-size: 25px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar  navbar-inverse \">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-2\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand title\" href=\"#\"><b>ShiftOnline</b></a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-2\">\n        <ul class=\"nav navbar-nav navbar-left\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/']\">ראשי</a></li>\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/events-list']\">איוונטים</a></li>\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/hanhayot']\">הנחיות</a></li>\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/faults']\">תיעוד תקלות</a></li>\n        </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n          \n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-bar',
            template: __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());

//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/bullets/bullets.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BulletsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bullet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BulletContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BulletsService = /** @class */ (function () {
    function BulletsService(http) {
        this.url = 'http://localhost:3000/api/bullets/';
        this.http = http;
    }
    BulletsService.prototype.getBullets = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + 'getAllBullets', {}, { headers: headers }).map(function (res) { return res.json(); });
    };
    BulletsService.prototype.removeBullet = function (bulletID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + 'removeBullet', { id: bulletID }, { headers: headers }).map(function (res) { return res.json(); });
    };
    BulletsService.prototype.addBullet = function (newBullet) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + 'addBullet', {
            "name": newBullet.name,
            "dateOfCreation": newBullet.dateOfCreation,
            "lastUpdate": newBullet.lastUpdate,
            "color": newBullet.color,
            "content": newBullet.content
        }, { headers: headers }).map(function (res) { return res.json(); });
    };
    BulletsService.prototype.addNewContentToBullet = function (bulletID, newContent) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + 'addNewContentToBullet', {
            "bulletID": bulletID,
            "contentUpdateTime": newContent.updateTime,
            "contentValue": newContent.content
        }, { headers: headers }).map(function (res) { return res.json(); });
    };
    BulletsService.prototype.updateTodayContentOfBullet = function (bulletID, newContent) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + 'updateTodayContentOfBullet', {
            "bulletID": bulletID,
            "contentUpdateTime": newContent.updateTime,
            "contentValue": newContent.content
        }, { headers: headers }).map(function (res) { return res.json(); });
    };
    BulletsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], BulletsService);
    return BulletsService;
    var _a;
}());

var Bullet = /** @class */ (function () {
    function Bullet(_name, _dateOfCreation, _lastUpdate, _color, _content) {
        this._name = _name;
        this._dateOfCreation = _dateOfCreation;
        this._lastUpdate = _lastUpdate;
        this._color = _color;
        this._content = _content;
    }
    Object.defineProperty(Bullet.prototype, "id", {
        get: function () { return this._id; },
        set: function (value) { this._id = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bullet.prototype, "name", {
        get: function () { return this._name; },
        set: function (value) { this._name = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bullet.prototype, "dateOfCreation", {
        get: function () { return this._dateOfCreation; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bullet.prototype, "lastUpdate", {
        get: function () { return this._lastUpdate; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bullet.prototype, "color", {
        get: function () { return this._color; },
        set: function (value) { this._color = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bullet.prototype, "content", {
        get: function () { return this._content; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    ;
    return Bullet;
}());

var BulletContent = /** @class */ (function () {
    function BulletContent(_updateTime, _content) {
        this._updateTime = _updateTime;
        this._content = _content;
    }
    Object.defineProperty(BulletContent.prototype, "updateTime", {
        get: function () { return this._updateTime; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BulletContent.prototype, "content", {
        get: function () { return this._content; },
        enumerable: true,
        configurable: true
    });
    ;
    return BulletContent;
}());

//# sourceMappingURL=bullets.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/fault/fault.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaultService; });
/* unused harmony export Fault */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__time_and_date_time_and_date_service__ = __webpack_require__("../../../../../src/app/services/time_and_date/time-and-date.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaultService = /** @class */ (function () {
    function FaultService() {
    }
    FaultService.prototype.getFaults = function () {
        var list = []; //for testing generate static 10 faultes
        for (var i = 1; i < 6; i++) {
            list.push(new Fault(i, 4, 101, false, new __WEBPACK_IMPORTED_MODULE_0__time_and_date_time_and_date_service__["a" /* Date */](2018, 2, 14), new __WEBPACK_IMPORTED_MODULE_0__time_and_date_time_and_date_service__["a" /* Date */](2018, 2, 14), "רון", "בדיקה"));
        }
        for (var i = 6; i < 11; i++) {
            list.push(new Fault(i, 6, 69, true, new __WEBPACK_IMPORTED_MODULE_0__time_and_date_time_and_date_service__["a" /* Date */](2018, 2, 20), new __WEBPACK_IMPORTED_MODULE_0__time_and_date_time_and_date_service__["a" /* Date */](2018, 2, 20), "דני", "בדיקה"));
        }
        return list;
    };
    FaultService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FaultService);
    return FaultService;
}());

var Fault = /** @class */ (function () {
    //this class describe how fault neet to seems
    function Fault(_id, _base, _site, _state, //אם התקלה משביתה או מורידה בשרידות  TRUE=משבית   FALSE=שרידות
    _startTime, _endTime, _contact, _remarks) {
        this._id = _id;
        this._base = _base;
        this._site = _site;
        this._state = _state;
        this._startTime = _startTime;
        this._endTime = _endTime;
        this._contact = _contact;
        this._remarks = _remarks;
    }
    Object.defineProperty(Fault.prototype, "id", {
        get: function () { return this._id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fault.prototype, "base", {
        get: function () { return this._base; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fault.prototype, "site", {
        get: function () { return this._site; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fault.prototype, "state", {
        get: function () { return this._state; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fault.prototype, "startTime", {
        get: function () { return this._startTime; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fault.prototype, "endTime", {
        get: function () { return this._endTime; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fault.prototype, "contact", {
        get: function () { return this._contact; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Fault.prototype, "remarks", {
        get: function () { return this._remarks; },
        enumerable: true,
        configurable: true
    });
    return Fault;
}());

var Base = /** @class */ (function () {
    function Base(_id, _name, _sites) {
        this._id = _id;
        this._name = _name;
        this._sites = _sites;
    }
    Object.defineProperty(Base.prototype, "id", {
        get: function () { return this._id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Base.prototype, "name", {
        get: function () { return this._name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Base.prototype, "sites", {
        get: function () { return this._sites; },
        enumerable: true,
        configurable: true
    });
    return Base;
}());
//# sourceMappingURL=fault.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/time_and_date/time-and-date.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TimeAndDateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Date; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimeAndDateService = /** @class */ (function () {
    function TimeAndDateService(_http) {
        this.url = 'http://localhost:3000';
        this.http = _http;
    }
    TimeAndDateService.prototype.getCurrentTime = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.url + '/api/bullets/getTime', {}, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TimeAndDateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], TimeAndDateService);
    return TimeAndDateService;
    var _a;
}());

var Date = /** @class */ (function () {
    function Date(_year, _mounth, _day) {
        this._year = _year;
        this._mounth = _mounth;
        this._day = _day;
    }
    Object.defineProperty(Date.prototype, "year", {
        get: function () { return this._year; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Date.prototype, "mounth", {
        get: function () { return this._mounth; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Date.prototype, "day", {
        get: function () { return this._day; },
        enumerable: true,
        configurable: true
    });
    ;
    Date.prototype.compare = function (anotherDate) {
        if (this._year > anotherDate._year)
            return 1;
        else if (this._year < anotherDate._year)
            return -1;
        else {
            if (this._mounth > anotherDate._mounth)
                return 1;
            else if (this._mounth < anotherDate._mounth)
                return -1;
            else {
                if (this._day > anotherDate._day)
                    return 1;
                else if (this._day < anotherDate._day)
                    return -1;
                else
                    return 0;
            }
        }
    };
    Date.prototype.toString = function () {
        return this._day + '/' + this._mounth + '/' + this._year;
    };
    return Date;
}());

//# sourceMappingURL=time-and-date.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map