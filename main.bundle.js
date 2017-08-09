webpackJsonp([3,6],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manual_entry_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manual_entry_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manual_entry_routing_module__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings_settings_module__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualEntryModule", function() { return ManualEntryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ManualEntryModule = (function () {
    function ManualEntryModule() {
    }
    ManualEntryModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__manual_entry_component__["a" /* ManualEntryComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__manual_entry_routing_module__["a" /* ManualEntryRoutingModule */], __WEBPACK_IMPORTED_MODULE_6__settings_settings_module__["a" /* SettingsModule */], __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__manual_entry_component__["a" /* ManualEntryComponent */], __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* CommonModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__manual_entry_service__["a" /* ManualEntryService */]]
        })
    ], ManualEntryModule);
    return ManualEntryModule;
}());

//# sourceMappingURL=manual-entry.module.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report_options_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_core_module__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__report_options_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__report_options_routing_module__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__options_view_options_view_module__ = __webpack_require__(221);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportOptionsModule", function() { return ReportOptionsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ReportOptionsModule = (function () {
    function ReportOptionsModule() {
    }
    ReportOptionsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__report_options_component__["a" /* ReportOptionsComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__core_core_module__["a" /* CoreModule */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6__report_options_routing_module__["a" /* ReportOptionsRoutingModule */], __WEBPACK_IMPORTED_MODULE_7__options_view_options_view_module__["a" /* OptionsViewModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__report_options_component__["a" /* ReportOptionsComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__report_options_service__["a" /* ReportOptionsService */]]
        })
    ], ReportOptionsModule);
    return ReportOptionsModule;
}());

//# sourceMappingURL=report-options.module.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manual_entry_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__platform_PlatformValues__ = __webpack_require__(127);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManualEntryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManualEntryComponent = (function () {
    function ManualEntryComponent(manualEntryService) {
        this.manualEntryService = manualEntryService;
        this.manualEntry = null;
        this.manulaEntryCss = null;
        this.manualEntryJs = null;
        this.manualEntryResponses = null;
        this.productSelected = "";
        this.platformValue = new __WEBPACK_IMPORTED_MODULE_2__platform_PlatformValues__["a" /* PlatformValues */]();
        this.showProductChip = false;
        this.examineeId = "1234";
        // until ngAfterViewInit, we cannot start (firstly) to process manual-entry stuff
        this.wasViewInitialized = false;
    }
    /**
     * This method creates manual entry component. It takes html, css and js strings.
     * @param html
     * @param css
     * @param js
     */
    ManualEntryComponent.prototype.createManualEntryModule = function (html, css, js, response, settings) {
        var _this = this;
        var componet = this.manualEntryService.createComponentModule(html, css, js, response, settings).then(function (factory) {
            var componentRef = _this.vcr.createComponent(factory);
            var comp = componentRef.instance;
        });
    };
    ManualEntryComponent.prototype.ngOnInit = function () {
    };
    ManualEntryComponent.prototype.ngAfterViewInit = function () {
        this.wasViewInitialized = true;
    };
    /**
     * This method cteates Dynamic component for manual entry.
     * @param productCode
     */
    ManualEntryComponent.prototype.createDynamicManualEntry = function (productCode, formName) {
        var _this = this;
        this.showProductChip = true;
        this.manualEntryService.fetchManualEntry(productCode, formName).subscribe(function (respHtml) {
            _this.manualEntry = respHtml.text();
            _this.manualEntryService.fetchManualEntryCSS(productCode, formName).subscribe(function (respCss) {
                _this.manulaEntryCss = respCss.text();
                _this.manualEntryService.fetchManualEntryJS(productCode, formName).subscribe(function (respJs) {
                    _this.manualEntryJs = respJs.text();
                    _this.manualEntryService.fetchManualEntryResponse(productCode, _this.examineeId).subscribe(function (respResponse) {
                        _this.manualEntryResponses = respResponse.text();
                        console.log(_this.manualEntryResponses);
                        _this.createManualEntryModule(_this.manualEntry, _this.manulaEntryCss, _this.manualEntryJs, _this.manualEntryResponses, _this.createSettingsScript(JSON.stringify(_this.platformValue)));
                    });
                });
            });
        });
    };
    ManualEntryComponent.prototype.ngAfterViewChecked = function () {
        //no code yet
    };
    ManualEntryComponent.prototype.ngOnChanges = function (changes) {
        if (this.wasViewInitialized) {
            return;
        }
        this.createManualEntryModule(this.manualEntry, this.manulaEntryCss, this.manualEntryJs, this.manualEntryResponses, this.createSettingsScript(JSON.stringify(this.platformValue)));
    };
    ManualEntryComponent.prototype.ngOnDestroy = function () {
        this.cleanUpComponentRef();
    };
    ManualEntryComponent.prototype.cleanUpComponentRef = function () {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
        this.componentRef = null;
    };
    ManualEntryComponent.prototype.saveResponse = function (event) {
        console.log("Response saved");
        document.getElementById('buttonItemResponseButton').click();
        var object = {
            "id": null,
            "acronym": this.productSelected,
            "examineeId": this.examineeId,
            "responses": document.getElementById('formDiv').innerHTML
        };
        this.manualEntryService.saveResponses(object).subscribe(function (resp) {
            console.log("Save Response :" + resp);
        });
        //  this.componentRef.instance.
    };
    // saveItemResponses() {
    //     this.componentRef.instance.
    // }
    ManualEntryComponent.prototype.productChange = function (productId) {
        if (this.productSelected == "Plese select") {
            return;
        }
        this.productSelected = productId;
        this.destroyManualEntryModule();
        console.log("selected product id : " + this.productSelected);
    };
    ManualEntryComponent.prototype.formChange = function (formId) {
        this.formSelected = formId;
        this.destroyManualEntryModule();
        console.log("selected form value : " + this.formSelected);
    };
    ManualEntryComponent.prototype.destroyManualEntryModule = function () {
        this.showProductChip = false;
        this.cleanUpComponentRef();
        this.vcr.clear();
    };
    ManualEntryComponent.prototype.loadManualEntryForm = function (value) {
        console.log("Logged value :" + value);
        /** destroy existing component **/
        this.destroyManualEntryModule();
        /**
         * Create component.
         */
        this.createDynamicManualEntry(this.productSelected, this.formSelected);
    };
    ManualEntryComponent.prototype.consumePlatformValues = function (object) {
        console.log("consumePlatformValues:");
        console.log(object);
        this.platformValue = object;
    };
    ManualEntryComponent.prototype.createSettingsScript = function (json) {
        console.log('createSettingsScript: ');
        console.log("onPlatformChange(" + json + ")");
        return "onPlatformChange(" + json + ")";
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ViewChild */])("itemEntry", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewContainerRef */] }),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewContainerRef */]) === "function" && _a || Object)
    ], ManualEntryComponent.prototype, "vcr", void 0);
    ManualEntryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
            selector: 'manaul-entry',
            template: __webpack_require__(284),
            styles: [__webpack_require__(278)],
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__manual_entry_service__["a" /* ManualEntryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__manual_entry_service__["a" /* ManualEntryService */]) === "function" && _b || Object])
    ], ManualEntryComponent);
    return ManualEntryComponent;
    var _a, _b;
}());

//# sourceMappingURL=manual-entry.component.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManualEntryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ManualEntryService = (function () {
    function ManualEntryService(compiler, http) {
        this.compiler = compiler;
        this.http = http;
        this.factoryCache = {};
        this.apiHostName = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiHostName;
    }
    ManualEntryService.prototype.createComponentModule = function (template, css, js, responses, settings) {
        /**
         * We should not load cached factory for manual entry. It won't run some required functions. So commenting below
         * factory loading from cache.
         * @type {ComponentFactory<IDynamicComponent>}
         */
        // let factory = this.factoryCache[template];
        // console.log("Factory loaded from cache" + factory);
        // if (factory) {
        //   console.log("Factory loaded from cache");
        //   return new Promise((resolve) => {
        //     resolve(factory);
        //   })
        // }
        var _this = this;
        var component = this.createComponent(template, css, js, responses, settings);
        var module = this.createModule(component);
        return new Promise(function (resolve) {
            _this.compiler.compileModuleAndAllComponentsAsync(module)
                .then(function (moduleWithFactories) {
                console.log("Module with Components");
                var factory = moduleWithFactories.componentFactories.find(function (x) { return x.selector === 't1'; });
                /**
                 * See above comment about factory loading from cache.
                 * @type {ComponentFactory<any>}
                 */
                _this.factoryCache[template] = factory;
                resolve(factory);
            });
        });
    };
    ManualEntryService.prototype.createComponent = function (html, css, js, responses, settings) {
        var TemplateComponent = (function () {
            function TemplateComponent(http) {
                this.http = http;
            }
            TemplateComponent.prototype.ngOnInit = function () {
            };
            TemplateComponent.prototype.ngAfterViewInit = function () {
                var _this = this;
                this.appendJavaScript(js);
                this.createItemResponseElement(responses);
                this.createSaveButtonDivElement();
                this.createDisableDivElement();
                /*Reads javascript from file  innerComponetJs.js abd appends it*/
                this.http.get("assets/local/innerComponetJs.js").subscribe(function (map) {
                    _this.appendJavaScript(map.text());
                    _this.appendJavaScript(settings);
                });
            };
            /*
             This method appends javascript to #container element/ component.
             */
            TemplateComponent.prototype.appendJavaScript = function (script) {
                var node = document.createElement("script");
                node.innerHTML = script;
                document.getElementById('container').appendChild(node);
            };
            TemplateComponent.prototype.createItemResponseElement = function (value) {
                var node = document.createElement("input");
                node.id = "manualEntry:itemResponses";
                node.value = value;
                node.type = "hidden";
                document.getElementById('container').appendChild(node);
            };
            TemplateComponent.prototype.createSaveButtonDivElement = function () {
                var node = document.createElement("div");
                node.style.display = "none";
                node.innerHTML = "<button id ='buttonItemResponseButton' name = 'buttonItemResponseButton' onclick='saveToJson();'> Save To Json </button>";
                document.getElementById('container').appendChild(node);
            };
            TemplateComponent.prototype.createDisableDivElement = function () {
                var node = document.createElement("div");
                node.style.display = "none";
                node.innerHTML = "<button id ='buttonDisableButton' name = 'buttonDisableButton' onclick='disableItemEntries(true);'> Disable </button>" + "" +
                    "<button id ='buttonEnableButton' name = 'buttonEnableButton' onclick='disableItemEntries(false);'> Disable </button>";
                document.getElementById('container').appendChild(node);
            };
            __decorate([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
                __metadata("design:type", Object)
            ], TemplateComponent.prototype, "entity", void 0);
            TemplateComponent = __decorate([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
                    selector: 't1',
                    host: { 'class': 'tundra', "id": "container" },
                    template: html,
                    styles: [css],
                }),
                __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
            ], TemplateComponent);
            return TemplateComponent;
            var _a;
        }());
        return TemplateComponent;
    };
    ManualEntryService.prototype.createModule = function (componentType) {
        var RuntimeModule = (function () {
            function RuntimeModule() {
            }
            RuntimeModule = __decorate([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
                    declarations: [componentType]
                })
            ], RuntimeModule);
            return RuntimeModule;
        }());
        return RuntimeModule;
    };
    ManualEntryService.prototype.fetchManualEntry = function (productCode, formName) {
        return this.http.get(this.apiHostName + "/bundle/product/manualentry/html/" + productCode + "/" + formName);
    };
    ManualEntryService.prototype.fetchManualEntryJS = function (productCode, formName) {
        return this.http.get(this.apiHostName + "/bundle/product/manualentry/js/" + productCode + "/" + formName);
    };
    ManualEntryService.prototype.fetchManualEntryCSS = function (productCode, formName) {
        return this.http.get(this.apiHostName + "/bundle/product/manualentry/css/" + productCode + "/" + formName);
    };
    ManualEntryService.prototype.fetchManualEntryResponse = function (productCode, examineeId) {
        return this.http.get(this.apiHostName + "/bundle/product/item-responses/" + productCode + "/" + examineeId);
    };
    ManualEntryService.prototype.saveResponses = function (response) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append("Content-Type", "application/json");
        return this.http.put(this.apiHostName + "/bundle/product/item-responses/save", JSON.stringify(response), { headers: headers });
    };
    ManualEntryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Compiler */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Compiler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Compiler */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _b || Object])
    ], ManualEntryService);
    return ManualEntryService;
    var _a, _b;
}());

//# sourceMappingURL=manual-entry.service.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatformValues; });
var PlatformValues = (function () {
    function PlatformValues() {
    }
    Object.defineProperty(PlatformValues.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformValues.prototype, "administrationDate", {
        get: function () {
            return this._administrationDate;
        },
        set: function (value) {
            this._administrationDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformValues.prototype, "birthDate", {
        get: function () {
            return this._birthDate;
        },
        set: function (value) {
            this._birthDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformValues.prototype, "autoAdvance", {
        get: function () {
            return this._autoAdvance;
        },
        set: function (value) {
            this._autoAdvance = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformValues.prototype, "deliveryType", {
        get: function () {
            return this._deliveryType;
        },
        set: function (value) {
            this._deliveryType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformValues.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformValues.prototype, "examinee", {
        get: function () {
            return this._examinee;
        },
        set: function (value) {
            this._examinee = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformValues.prototype, "noOfRuns", {
        get: function () {
            return this._noOfRuns;
        },
        set: function (value) {
            this._noOfRuns = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformValues.prototype, "noOfExportRuns", {
        get: function () {
            return this._noOfExportRuns;
        },
        set: function (value) {
            this._noOfExportRuns = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformValues.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (value) {
            this._gender = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformValues.prototype, "userDateFormat", {
        get: function () {
            return this._userDateFormat;
        },
        set: function (value) {
            this._userDateFormat = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformValues.prototype, "dataCollection_UserOpt", {
        get: function () {
            return this._dataCollection_UserOpt;
        },
        set: function (value) {
            this._dataCollection_UserOpt = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformValues.prototype, "scoringEngine", {
        get: function () {
            return this._scoringEngine;
        },
        set: function (value) {
            this._scoringEngine = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformValues.prototype, "flxFormItems", {
        get: function () {
            return this._flxFormItems;
        },
        set: function (value) {
            this._flxFormItems = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformValues.prototype, "batterySelected", {
        get: function () {
            return this._batterySelected;
        },
        set: function (value) {
            this._batterySelected = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformValues.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformValues.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlatformValues.prototype, "middleName", {
        get: function () {
            return this._middleName;
        },
        set: function (value) {
            this._middleName = value;
        },
        enumerable: true,
        configurable: true
    });
    return PlatformValues;
}());

//# sourceMappingURL=PlatformValues.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsService = (function () {
    function SettingsService(http) {
        this.http = http;
        this.apiHostName = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiHostName;
    }
    SettingsService.prototype.listProducts = function () {
        return this.http.get(this.apiHostName + "/bundle/product/all");
    };
    SettingsService.prototype.listForms = function (productId) {
        return this.http.get(this.apiHostName + "/bundle/product/forms/" + productId);
    };
    SettingsService.prototype.getPlatformValues = function (formId, examineeId) {
        return this.http.get(this.apiHostName + "/bundle/assessment/data/values/{formId}/{examineeId}");
    };
    SettingsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
    ], SettingsService);
    return SettingsService;
    var _a;
}());

//# sourceMappingURL=settings.service.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options_view_service__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OptionsViewComponent = (function () {
    function OptionsViewComponent(optionsViewService) {
        this.optionsViewService = optionsViewService;
        this.wasViewInitialized = false;
    }
    OptionsViewComponent.prototype.ngOnDestroy = function () {
        this.destroyComponent();
    };
    OptionsViewComponent.prototype.createOptions = function (html, js, css, response) {
        var _this = this;
        this.destroyComponent();
        this.optionsViewService.compileOptionsModule(html, js, css, response).then(function (factory) {
            var componentRef = _this.viewContainerRef.createComponent(factory);
            var component = componentRef.instance;
        });
    };
    OptionsViewComponent.prototype.ngOnInit = function () {
    };
    OptionsViewComponent.prototype.ngAfterViewInit = function () {
        this.wasViewInitialized = true;
    };
    OptionsViewComponent.prototype.ngAfterViewChecked = function () {
    };
    OptionsViewComponent.prototype.ngOnChanges = function (changes) {
        if (!this.wasViewInitialized) {
            return;
        }
        this.destroyComponent();
    };
    OptionsViewComponent.prototype.destroyComponent = function () {
        if (this.viewContainerRef) {
            this.viewContainerRef.clear();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ViewChild */])("ov", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewContainerRef */] }),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ViewContainerRef */]) === "function" && _a || Object)
    ], OptionsViewComponent.prototype, "viewContainerRef", void 0);
    OptionsViewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
            selector: "options-view",
            template: __webpack_require__(286),
            styles: [__webpack_require__(280)]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__options_view_service__["a" /* OptionsViewService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__options_view_service__["a" /* OptionsViewService */]) === "function" && _b || Object])
    ], OptionsViewComponent);
    return OptionsViewComponent;
    var _a, _b;
}());

//# sourceMappingURL=options-view.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_core_module__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsViewService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var OptionsViewService = (function () {
    function OptionsViewService(compiler, http) {
        this.compiler = compiler;
        this.http = http;
    }
    OptionsViewService.prototype.createOptionsComponent = function (html, js, css, response) {
        var OptionsViewDynamicComponent = (function () {
            function OptionsViewDynamicComponent(http) {
                this.http = http;
                this.responsesEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
            }
            OptionsViewDynamicComponent.prototype.ngAfterViewInit = function () {
                var _this = this;
                this.addAllInputHiddenElesToContainer();
                this.appendJavaScript(js);
                this.createValidateDivElement();
                this.http.get("assets/local/report/reportOptions.js").subscribe(function (map) {
                    _this.appendJavaScript(map.text());
                });
                this.createSaveReponsesButton();
                this.createLoadResponsesButton();
            };
            OptionsViewDynamicComponent.prototype.appendJavaScript = function (script) {
                if (!script) {
                    return;
                }
                var node = document.createElement("script");
                node.innerHTML = script;
                document.getElementById('optionsContainer').appendChild(node);
            };
            OptionsViewDynamicComponent.prototype.createValidateDivElement = function () {
                var node = document.createElement("div");
                node.style.display = "none";
                node.innerHTML = "<button id ='validationButtionHidden' name = 'validationButtionHidden' onclick='validateReportOptionsForm();'> Validate </button>";
                document.getElementById('optionsContainer').appendChild(node);
            };
            OptionsViewDynamicComponent.prototype.createSaveReponsesButton = function () {
                var node = document.createElement("div");
                node.style.display = "none";
                node.innerHTML = "<button id ='saveJsonButton' name = 'saveJsonButton' onclick='fnConvertReportOptionsToJSON();'> Save </button>";
                document.getElementById('optionsContainer').appendChild(node);
            };
            OptionsViewDynamicComponent.prototype.createLoadResponsesButton = function () {
                var node = document.createElement("div");
                node.style.display = "none";
                node.innerHTML = "<button id ='loadResponsesButton' name = 'loadResponsesButton' onclick='loadResponses();'> Load Responses </button>";
                document.getElementById('optionsContainer').appendChild(node);
            };
            OptionsViewDynamicComponent.prototype.addAllInputHiddenElesToContainer = function () {
                var objs = [{ id: "reportOptionForm:manualEntryJsonFormData", data: "{}" },
                    { id: "reportOptionForm:reportOptionsJsonFormData", data: !!response ? response : "{}" },
                    { id: "progressReportOptionForm:manualEntryJsonFormData", data: "{}" },
                    { id: "progressReportOptionForm:progressReportOptionsJsonFormData", data: "{}" }];
                for (var _i = 0, objs_1 = objs; _i < objs_1.length; _i++) {
                    var obj = objs_1[_i];
                    this.addInputHiddenElesToContainer(obj);
                }
            };
            OptionsViewDynamicComponent.prototype.addInputHiddenElesToContainer = function (obj) {
                var node = document.createElement("input");
                node.type = "hidden";
                node.id = obj.id;
                node.value = obj.data;
                document.getElementById('optionsContainer').appendChild(node);
            };
            OptionsViewDynamicComponent = __decorate([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
                    selector: "optionsViewDynamic",
                    host: { 'class': 'tundra', 'id': 'optionsContainer', 'name': 'optionsContainer' },
                    template: html,
                    styles: [css]
                }),
                __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
            ], OptionsViewDynamicComponent);
            return OptionsViewDynamicComponent;
            var _a;
        }());
        return OptionsViewDynamicComponent;
    };
    OptionsViewService.prototype.createOptionsModule = function (component) {
        var OptionsDynamicModule = (function () {
            function OptionsDynamicModule() {
            }
            OptionsDynamicModule = __decorate([
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
                    declarations: [component],
                    imports: [__WEBPACK_IMPORTED_MODULE_2__core_core_module__["a" /* CoreModule */]]
                })
            ], OptionsDynamicModule);
            return OptionsDynamicModule;
        }());
        return OptionsDynamicModule;
    };
    OptionsViewService.prototype.compileOptionsModule = function (html, js, css, response) {
        var _this = this;
        var component = this.createOptionsComponent(html, js, css, response);
        var module = this.createOptionsModule(component);
        return new Promise(function (resolve) {
            _this.compiler.compileModuleAndAllComponentsAsync(module).then(function (moduleWithFactories) {
                var factory = moduleWithFactories.componentFactories.find(function (x) { return x.selector === "optionsViewDynamic"; });
                resolve(factory);
            });
        });
    };
    OptionsViewService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Compiler */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Compiler */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Compiler */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _b || Object])
    ], OptionsViewService);
    return OptionsViewService;
    var _a, _b;
}());

//# sourceMappingURL=options-view.service.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__report_options_service__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__options_view_options_view_component__ = __webpack_require__(129);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportOptionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportOptionsComponent = (function () {
    function ReportOptionsComponent(reportOptionsService) {
        this.reportOptionsService = reportOptionsService;
        this.examineeIdString = "1234";
    }
    ReportOptionsComponent.prototype.ngOnInit = function () {
        this.listAllProducts();
    };
    ReportOptionsComponent.prototype.listAllProducts = function () {
        var _this = this;
        this.reportOptionsService.listProducts().subscribe(function (resp) {
            _this.products = resp.json();
        });
    };
    ReportOptionsComponent.prototype.productChange = function () {
        var _this = this;
        console.log("Selected product : " + this.selectedProduct);
        this.clearForms();
        this.reportOptionsService.listForms(this.selectedProduct).subscribe(function (resp) {
            _this.forms = resp.json();
        });
    };
    ReportOptionsComponent.prototype.formChange = function () {
        var _this = this;
        this.clearReports();
        this.reportOptionsService.listReports(this.selectedProduct, this.selectedForm).subscribe(function (resp) {
            _this.reports = resp.json();
        });
    };
    ReportOptionsComponent.prototype.reportChange = function () {
        console.log('Selected Report :' + this.selectedReport);
        this.viewComponent.destroyComponent();
        this.buildReportOptionsModule();
    };
    ReportOptionsComponent.prototype.buildReportOptionsModule = function () {
        var _this = this;
        this.reportOptionsService.getOptionsHTML(this.selectedProduct, this.selectedForm, this.selectedReport).subscribe(function (htmlResp) {
            _this.reportOptionsService.getOptionsJS(_this.selectedProduct, _this.selectedForm, _this.selectedReport).subscribe(function (jsResp) {
                _this.reportOptionsService.getOptionsCSS(_this.selectedProduct, _this.selectedForm, _this.selectedReport).subscribe(function (cssResp) {
                    _this.reportOptionsService.getOptionsResponses(_this.examineeIdString, _this.selectedReport).subscribe(function (optionsResp) {
                        var reportOptionsResponse = optionsResp.text() ? optionsResp.json() : null;
                        var response = null;
                        if (!!reportOptionsResponse) {
                            response = reportOptionsResponse.response;
                        }
                        _this.viewComponent.createOptions(htmlResp.text(), jsResp.text(), cssResp.text(), response);
                        _this.showActions = true;
                    });
                });
            });
        }, function (err) {
            _this.viewComponent.createOptions("<md-chip color=\"warn\" selected=\"true\">Report options are not found in bundle." +
                " You may get it from database. </md-chip>", "", "", "");
            _this.showActions = false;
        });
    };
    ReportOptionsComponent.prototype.clearReports = function () {
        this.reports = [];
        this.selectedReport = null;
        this.viewComponent.destroyComponent();
        this.showActions = false;
    };
    ReportOptionsComponent.prototype.clearForms = function () {
        this.clearReports();
        this.forms = [];
        this.selectedForm = null;
    };
    ReportOptionsComponent.prototype.ngOnDestroy = function () {
        this.viewComponent.ngOnDestroy();
    };
    ReportOptionsComponent.prototype.validateOptions = function () {
        document.getElementById('validationButtionHidden').click();
    };
    ReportOptionsComponent.prototype.saveOptionsJson = function () {
        document.getElementById("saveJsonButton").click();
        var optionsResponses = document.getElementById("reportOptionForm:reportOptionsJsonFormData").value;
        var responses = {
            id: null,
            examineeId: this.examineeIdString,
            reportId: this.selectedReport,
            response: optionsResponses
        };
        this.reportOptionsService.saveOptionsResponses(responses).subscribe(function (resp) {
            console.log("Saved Response :");
            console.log(resp.json());
        });
        console.log("saveOptionsJson" + optionsResponses);
    };
    ReportOptionsComponent.prototype.loadOptions = function () {
        this.reportOptionsService.getOptionsResponses(this.examineeIdString, this.selectedReport).subscribe(function (resp) {
            var reportOptionsResponse = resp.text() ? resp.json() : null;
            console.log("reportOptionsResponse :" + reportOptionsResponse);
            if (!!reportOptionsResponse) {
                document.getElementById("reportOptionForm:reportOptionsJsonFormData").value =
                    reportOptionsResponse.response;
                document.getElementById("loadResponsesButton").click();
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__options_view_options_view_component__["a" /* OptionsViewComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__options_view_options_view_component__["a" /* OptionsViewComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__options_view_options_view_component__["a" /* OptionsViewComponent */]) === "function" && _a || Object)
    ], ReportOptionsComponent.prototype, "viewComponent", void 0);
    ReportOptionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
            selector: "report-options",
            template: __webpack_require__(287),
            styles: [__webpack_require__(281)]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__report_options_service__["a" /* ReportOptionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__report_options_service__["a" /* ReportOptionsService */]) === "function" && _b || Object])
    ], ReportOptionsComponent);
    return ReportOptionsComponent;
    var _a, _b;
}());

//# sourceMappingURL=report-options.component.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportOptionsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportOptionsService = (function () {
    function ReportOptionsService(http) {
        this.http = http;
        this.apiHostName = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiHostName;
    }
    ReportOptionsService.prototype.listProducts = function () {
        return this.http.get(this.apiHostName + "/bundle/product/all");
    };
    ReportOptionsService.prototype.listForms = function (productId) {
        return this.http.get(this.apiHostName + "/bundle/product/forms/" + productId);
    };
    ReportOptionsService.prototype.listReports = function (productId, formName) {
        return this.http.get(this.apiHostName + "/bundle/product/reports/list/" + productId + "/" + formName);
    };
    ReportOptionsService.prototype.getOptionsHTML = function (productId, formName, reportId) {
        return this.http.get(this.apiHostName + "/bundle/product/options/html/" + productId + "/" + formName + "/" + reportId);
    };
    ReportOptionsService.prototype.getOptionsCSS = function (productId, formName, reportId) {
        return this.http.get(this.apiHostName + "/bundle/product/options/css/" + productId + "/" + formName + "/" + reportId);
    };
    ReportOptionsService.prototype.getOptionsJS = function (productId, formName, reportId) {
        return this.http.get(this.apiHostName + "/bundle/product/options/js/" + productId + "/" + formName + "/" + reportId);
    };
    ReportOptionsService.prototype.saveOptionsResponses = function (response) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append("Content-Type", "application/json");
        return this.http.put(this.apiHostName + "/bundle/product/options/responses/save", JSON.stringify(response), { headers: headers });
    };
    ReportOptionsService.prototype.getOptionsResponses = function (examineeId, reportId) {
        return this.http.get(this.apiHostName + "/bundle/product/options/responses/" + examineeId + "/" + reportId);
    };
    ReportOptionsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
    ], ReportOptionsService);
    return ReportOptionsService;
    var _a;
}());

//# sourceMappingURL=report-options.service.js.map

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/home/home.module": [
		545,
		1
	],
	"app/login/login.module": [
		546,
		0
	],
	"app/manual-entry/manual-entry.module": [
		110
	],
	"app/report-options/report-options.module": [
		111
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 189;


/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(59);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectivePreloadingStrategy; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectivePreloadingStrategy = (function () {
    function SelectivePreloadingStrategy() {
        this.preloadedModules = [];
    }
    SelectivePreloadingStrategy.prototype.preload = function (route, load) {
        if (route.data && route.data['preload']) {
            // add the route path to the preloaded module array
            this.preloadedModules.push(route.path);
            // log the route path to the console
            console.log('Preloaded: ' + route.path);
            return load();
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(null);
        }
    };
    SelectivePreloadingStrategy = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])()
    ], SelectivePreloadingStrategy);
    return SelectivePreloadingStrategy;
}());

//# sourceMappingURL=SelectivePreloadingStrategy.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SelectivePreloadingStrategy__ = __webpack_require__(214);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "login",
        loadChildren: "app/login/login.module#LoginModule"
    },
    {
        path: "manualentry",
        loadChildren: "app/manual-entry/manual-entry.module#ManualEntryModule"
    },
    {
        path: "home",
        loadChildren: "app/home/home.module#HomeModule"
    },
    {
        path: "reportoptions",
        loadChildren: "app/report-options/report-options.module#ReportOptionsModule"
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, {
                    enableTracing: true,
                    preloadingStrategy: __WEBPACK_IMPORTED_MODULE_2__SelectivePreloadingStrategy__["a" /* SelectivePreloadingStrategy */],
                })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__SelectivePreloadingStrategy__["a" /* SelectivePreloadingStrategy */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Manual Entry Screen';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.router.navigate(["/login"]);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(283),
            styles: [__webpack_require__(277)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__manual_entry_manual_entry_module__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__report_options_report_options_module__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__manual_entry_manual_entry_module__["ManualEntryModule"],
                __WEBPACK_IMPORTED_MODULE_9__report_options_report_options_module__["ReportOptionsModule"]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manual_entry_component__ = __webpack_require__(125);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManualEntryRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_2__manual_entry_component__["a" /* ManualEntryComponent */],
    }
];
var ManualEntryRoutingModule = (function () {
    function ManualEntryRoutingModule() {
    }
    ManualEntryRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], ManualEntryRoutingModule);
    return ManualEntryRoutingModule;
}());

//# sourceMappingURL=manual-entry-routing.module.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__platform_PlatformValues__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_service__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsComponent = (function () {
    function SettingsComponent(settingsService) {
        this.settingsService = settingsService;
        this.examineeId = "1234";
        this.platformValue = new __WEBPACK_IMPORTED_MODULE_1__platform_PlatformValues__["a" /* PlatformValues */]();
        this.showSettings = false;
        this.productChangeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.formChangeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.manualEntryLoadEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.saveResponseEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.platformValuesChangeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.loadAllProducts();
    };
    SettingsComponent.prototype.loadAllProducts = function () {
        var _this = this;
        this.settingsService.listProducts().subscribe(function (resp) {
            _this.products = resp.json();
        });
    };
    SettingsComponent.prototype.validate = function () {
        document.getElementById('buttonDisableButton').click();
    };
    SettingsComponent.prototype.enable = function () {
        document.getElementById('buttonEnableButton').click();
    };
    SettingsComponent.prototype.productChange = function () {
        var _this = this;
        if (this.productSelected == "Plese select") {
            return;
        }
        this.manageEnableButtons(false);
        //this.destroyManualEntryModule();
        this.settingsService.listForms(this.productSelected).subscribe(function (resp) {
            _this.forms = resp.json();
            _this.productChangeEvent.emit(_this.productSelected);
        });
    };
    SettingsComponent.prototype.formChange = function () {
        var _this = this;
        this.formSelected;
        // this.destroyManualEntryModule();
        this.settingsService.getPlatformValues(this.formSelected, this.examineeId).subscribe(function (map) {
            _this.platformValue = map.json();
            _this.formChangeEvent.emit(_this.formSelected);
            /**
             * Pushes platformValues to listener.
             */
            _this.platformValuesChangeEvent.emit(_this.platformValue);
            _this.manageEnableButtons(true);
        });
        console.log("selected form value : " + this.formSelected);
    };
    SettingsComponent.prototype.loadManualEntryForm = function () {
        this.manualEntryLoadEvent.emit(true);
        this.enableManualEntryRelatedButtons = true;
    };
    SettingsComponent.prototype.sendSaveResponseEvent = function () {
        this.saveResponseEvent.emit(true);
    };
    SettingsComponent.prototype.manageEnableButtons = function (flag) {
        if (!flag) {
            this.enableLoadManualEntryButton = flag;
            this.enableManualEntryRelatedButtons = flag;
        }
        else {
            this.enableLoadManualEntryButton = flag;
        }
        console.log(this.enableLoadManualEntryButton);
        console.log(this.enableManualEntryRelatedButtons);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _a || Object)
    ], SettingsComponent.prototype, "productChangeEvent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _b || Object)
    ], SettingsComponent.prototype, "formChangeEvent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])(),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _c || Object)
    ], SettingsComponent.prototype, "manualEntryLoadEvent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])(),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _d || Object)
    ], SettingsComponent.prototype, "saveResponseEvent", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])(),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]) === "function" && _e || Object)
    ], SettingsComponent.prototype, "platformValuesChangeEvent", void 0);
    SettingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Component */])({
            selector: "settings",
            template: __webpack_require__(285),
            styles: [__webpack_require__(279)]
        }),
        __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__settings_service__["a" /* SettingsService */]) === "function" && _f || Object])
    ], SettingsComponent);
    return SettingsComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_component__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_core_module__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SettingsModule = (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__settings_component__["a" /* SettingsComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__core_core_module__["a" /* CoreModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__settings_component__["a" /* SettingsComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__settings_service__["a" /* SettingsService */]]
        })
    ], SettingsModule);
    return SettingsModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__options_view_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__options_view_service__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsViewModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OptionsViewModule = (function () {
    function OptionsViewModule() {
    }
    OptionsViewModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__options_view_component__["a" /* OptionsViewComponent */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__options_view_component__["a" /* OptionsViewComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__options_view_service__["a" /* OptionsViewService */]]
        })
    ], OptionsViewModule);
    return OptionsViewModule;
}());

//# sourceMappingURL=options-view.module.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__report_options_component__ = __webpack_require__(131);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportOptionsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: "",
        component: __WEBPACK_IMPORTED_MODULE_2__report_options_component__["a" /* ReportOptionsComponent */] }
];
var ReportOptionsRoutingModule = (function () {
    function ReportOptionsRoutingModule() {
    }
    ReportOptionsRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], ReportOptionsRoutingModule);
    return ReportOptionsRoutingModule;
}());

//# sourceMappingURL=report-options-routing.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".title-align {\n  text-align: center;\n}\n\n.tool-bar-align {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.settings-basic {\n  padding: 20px;\n  /*display: flex;*/\n}\n\n.settings-basic .mat-card-content {\n  padding: 16px;\n}\n\n#container > body, div, dl, dt, dd, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, input, textarea, p, blockquote, th, td {\n  margin: 0;\n  padding: 0;\n}\n\n#container > fieldset, img {\n  border: 0 none;\n}\n\n#container > address, caption, cite, code, dfn, th, var {\n  font-style: normal;\n  font-weight: normal;\n}\n\n#container > caption, th {\n  text-align: left;\n}\n\n#container > q:before, q:after {\n  content: \"\";\n}\n\n#container > abbr, acronym {\n  border: 0;\n}\n\n#container > body {\n  font: 12px Myriad, Helvetica, Tahoma, Arial, clean, sans-serif;\n  *font-size: 75%;\n}\n\n#container > h1 {\n  font-size: 1.5em;\n  font-weight: normal;\n  line-height: 1em;\n  margin-top: 1em;\n  margin-bottom: 0;\n}\n\n#container > h2 {\n  font-size: 1.1667em;\n  font-weight: bold;\n  line-height: 1.286em;\n  margin-top: 1.929em;\n  margin-bottom: 0.643em;\n}\n\n#container > h3, h4, h5, h6 {\n  font-size: 1em;\n  font-weight: bold;\n  line-height: 1.5em;\n  margin-top: 1.5em;\n  margin-bottom: 0;\n}\n\n#container > p {\n  font-size: 1em;\n  margin-top: 1.5em;\n  margin-bottom: 1.5em;\n  line-height: 1.5em;\n}\n\n#container > blockquote {\n  font-size: 0.916em;\n  margin-top: 3.272em;\n  margin-bottom: 3.272em;\n  line-height: 1.636em;\n  padding: 1.636em;\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n}\n\n#container > ol li, ul li {\n  font-size: 1em;\n  line-height: 1.5em;\n  margin: 0;\n}\n\n#container > pre, code {\n  font-size: 115%;\n  *font-size: 100%;\n  font-family: Courier, \"Courier New\";\n  background-color: #efefef;\n  border: 1px solid #ccc;\n}\n\n#container > pre {\n  border-width: 1px 0;\n  padding: 1.5em;\n}\n\n#container > table {\n  font-size: 100%;\n}\n\n.dojoTabular {\n  border-collapse: collapse;\n  border-spacing: 0;\n  border: 1px solid #ccc;\n  margin: 0 1.5em;\n}\n\n#container > .dojoTabular th {\n  text-align: center;\n  font-weight: bold;\n}\n\n#container > .dojoTabular thead,\n#container > .dojoTabular tfoot {\n  background-color: #efefef;\n  border: 1px solid #ccc;\n  border-width: 1px 0;\n}\n\n#container > .dojoTabular th,\n#container > .dojoTabular td {\n  padding: 0.25em 0.5em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".title-align {\n  text-align: center;\n}\n\n.tool-bar-align {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.settings-basic {\n  padding: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.settings-basic .mat-card-content {\n  padding: 16px;\n}\n\n.td-padding {\n  padding: 0.3em;\n  width: 250px;\n}\n\n.settings-full-width {\n  /*width: 100%;*/\n}\n\n.settings-card {\n  margin: 16px;\n}\n\n.settings-text-align-end {\n  text-align: end;\n}\n\n.settings-textarea {\n  resize: none;\n  border: none;\n  overflow: auto;\n  padding: 0;\n  background: lightblue;\n}\n\n.example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(27)();
// imports


// module
exports.push([module.i, ".title-align {\n  text-align: center;\n}\n\n.tool-bar-align {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.td-padding {\n  padding: 0.3em;\n  width: 250px;\n}\n\n.toolbar-padding {\n  padding-left: 50px;\n}\n\n\n.settings-basic {\n  padding: 20px;\n  /*display: flex;*/\n}\n\n.settings-basic .mat-card-content {\n  padding: 16px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 283:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 284:
/***/ (function(module, exports) {

module.exports = "<settings (manualEntryLoadEvent)=\"loadManualEntryForm($event)\" (productChangeEvent)=\"productChange($event)\"\n          (formChangeEvent)=\"formChange($event)\" (saveResponseEvent)=\"saveResponse($event)\"\n          (platformValuesChangeEvent)=\"consumePlatformValues($event)\"></settings>\n\n\n<md-card class=\"settings-card settings-basic\">\n\n  <md-chip-list>\n      <md-chip *ngIf=\"showProductChip\" color=\"primary\" selected=\"true\">{{productSelected}} &#10142; {{formSelected}}</md-chip>\n  </md-chip-list>\n\n<br>\n  <div #itemEntry>\n\n  </div>\n\n  <div id=\"formDiv\" name=\"formDiv\">\n\n  </div>\n\n</md-card>\n\n\n\n\n\n"

/***/ }),

/***/ 285:
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\">\n  <md-toolbar class=\"tool-bar-align\" color=\"secondary\">Manual Entry Item Responses</md-toolbar>\n  <md-card class=\"settings-card settings-basic\">\n    <p></p>\n\n    <md-card-content>\n      <form ng-form=\"settingsForm\">\n\n        <table>\n          <tr>\n            <td class=\"td-padding\">\n              <md-select name=\"productName\" [(ngModel)]=\"productSelected\" (change)=\"productChange()\"\n                         [style.width]=\"'100%'\"\n                         placeholder=\"Products:\">\n                <md-option [value]=\"\"> Please select</md-option>\n                <md-option *ngFor=\"let p of products\" [value]=\"p\"> {{p}}</md-option>\n              </md-select>\n\n            </td>\n            <td></td>\n\n\n            <td class=\"td-padding\">\n              <md-select name=\"formName\" [(ngModel)]=\"formSelected\" (change)=\"formChange()\" placeholder=\"Forms:\"\n                         [style.width]=\"'100%'\">\n                <md-option [value]=\"\"> Please select</md-option>\n                <md-option *ngFor=\"let f of forms\" [value]=\"f\"> {{f}}</md-option>\n              </md-select>\n            </td>\n\n            <td></td>\n            <td>\n              <section class=\"example-section\">\n                <md-slide-toggle id=\"showSettingsCheckbox\" name=\"showSettingsCheckbox\" class=\"example-margin\"\n                                 [(ngModel)]=\"showSettings\">Show Platform Variables\n                </md-slide-toggle>\n\n              </section>\n            </td>\n          </tr>\n        </table>\n\n\n        <div class=\"settingsDiv\" layout=\"row\" [hidden]=\"!showSettings\">\n          <md-toolbar class=\"tool-bar-align\" color=\"secondary\">Platform Variables</md-toolbar>\n          <div class=\"form-group\">\n\n            <md-input-container class=\"settings-full-width\">\n              <input mdInput type=\"text\" class=\"form-control\" id=\"age\" name=\"age\" [(ngModel)]=\"platformValue.age\"\n                     #age=\"ngModel\" placeholder=\"Age\">\n              <div [hidden]=\"age || age.pristine\" class=\"alert alert-danger\"> Age is required</div>\n            </md-input-container>\n          </div>\n          <div class=\"form-group\">\n\n            <md-input-container class=\"settings-full-width\">\n              <input mdInput type=\"text\" class=\"form-control\" id=\"adminDate\" name=\"adminDate\"\n                     [(ngModel)]=\"platformValue.administrationDate\" #adminDate=\"ngModel\"\n                     placeholder=\"Admistration Date:\">\n              <div [hidden]=\"adminDate || adminDate.pristine\" class=\"alert alert-danger\">Admistration Date is\n                required\n              </div>\n            </md-input-container>\n          </div>\n\n\n          <div class=\"form-group\">\n\n            <md-input-container class=\"settings-full-width\">\n              <input mdInput type=\"date\" class=\"form-control\" id=\"bdate\" name=\"bdate\"\n                     [(ngModel)]=\"platformValue.birthDate\"\n                     #bdate=\"ngModel\" placeholder=\"Birth Date\">\n              <div [hidden]=\"bdate || bdate.pristine\" class=\"alert alert-danger\">Birth Date is required</div>\n            </md-input-container>\n          </div>\n\n          <div class=\"form-group\">\n            <md-input-container class=\"settings-full-width\">\n              <input mdInput type=\"text\" class=\"form-control\" id=\"autoAdvance\" name=\"autoAdvance\"\n                     [(ngModel)]=\"platformValue.autoAdvance\" #autoAdvance=\"ngModel\" placeholder=\"Auto Advance\">\n              <div [hidden]=\"autoAdvance || autoAdvance.pristine\" class=\"alert alert-danger\">Auto Advance is\n                required\n              </div>\n            </md-input-container>\n          </div>\n\n          <div class=\"form-group\">\n\n            <md-input-container class=\"settings-full-width\">\n              <input mdInput type=\"text\" class=\"form-control\" id=\"deliveryType\" name=\"deliveryType\"\n                     [(ngModel)]=\"platformValue.deliveryType\" #deliveryType=\"ngModel\" placeholder=\"Delivery type\">\n              <div [hidden]=\"deliveryType || deliveryType.pristine\" class=\"alert alert-danger\">Auto Advance is\n                required\n              </div>\n            </md-input-container>\n          </div>\n\n          <div class=\"form-group\">\n\n            <md-input-container class=\"settings-full-width\">\n              <input mdInput type=\"text\" class=\"form-control\" id=\"status\" name=\"status\"\n                     [(ngModel)]=\"platformValue.status\"\n                     #status=\"ngModel\" placeholder=\"status\">\n              <div [hidden]=\"status || status.pristine\" class=\"alert alert-danger\">Status is required</div>\n            </md-input-container>\n          </div>\n\n          <div class=\"form-group\">\n            <label></label>\n            <md-input-container class=\"settings-full-width\">\n              <input mdInput type=\"text\" class=\"form-control\" id=\"examineeLable\" name=\"examineeLable\"\n                     [(ngModel)]=\"platformValue.examinee\" #examineeLable=\"ngModel\" placeholder=\"Examinee Label\">\n              <div [hidden]=\"examineeLable || examineeLable.pristine\" class=\"alert alert-danger\">Examinee Label is\n                required\n              </div>\n            </md-input-container>\n          </div>\n\n          <div class=\"form-group\">\n            <label></label>\n            <md-input-container class=\"settings-full-width\">\n              <input mdInput type=\"text\" class=\"form-control\" id=\"noOfRuns\" name=\"noOfRuns\"\n                     [(ngModel)]=\"platformValue.noOfRuns\" #noOfRuns=\"ngModel\" placeholder=\"Number of Runs\">\n              <div [hidden]=\"noOfRuns || noOfRuns.pristine\" class=\"alert alert-danger\">Number of Runs is required\n              </div>\n            </md-input-container>\n          </div>\n\n          <div class=\"form-group\">\n            <md-input-container class=\"settings-full-width\">\n              <input mdInput type=\"text\" class=\"form-control\" id=\"noOfExportRuns\" name=\"noOfExportRuns\"\n                     [(ngModel)]=\"platformValue.noOfExportRuns\" #noOfExportRuns=\"ngModel\"\n                     placeholder=\"Number Of ExportRuns:\">\n              <div [hidden]=\"noOfExportRuns || noOfExportRuns.pristine\" class=\"alert alert-danger\">Auto Advance is\n                required\n              </div>\n            </md-input-container>\n          </div>\n\n\n          <div class=\"form-group\">\n            <md-input-container class=\"settings-full-width\">\n              <input mdInput type=\"text\" class=\"form-control\" id=\"gender\" name=\"gender\"\n                     [(ngModel)]=\"platformValue.gender\"\n                     #gender=\"ngModel\" placeholder=\"Gender:\">\n              <div [hidden]=\"gender || gender.pristine\" class=\"alert alert-danger\">Auto Advance is required</div>\n            </md-input-container>\n          </div>\n\n          <div class=\"form-group\">\n            <md-input-container class=\"settings-full-width\">\n              <input mdInput type=\"text\" class=\"form-control\" id=\"userDateFormat\" name=\"userDateFormat\"\n                     [(ngModel)]=\"platformValue.userDateFormat\" #userDateFormat=\"ngModel\"\n                     placeholder=\"User Date Format:\">\n              <div [hidden]=\"userDateFormat || userDateFormat.pristine\" class=\"alert alert-danger\">Auto Advance is\n                required\n              </div>\n            </md-input-container>\n          </div>\n\n          <div class=\"form-group\">\n            <md-input-container class=\"settings-full-width\">\n              <input mdInput type=\"text\" class=\"form-control\" id=\"dataCollection_UserOpt\" name=\"dataCollection_UserOpt\"\n                     [(ngModel)]=\"platformValue.dataCollection_UserOpt\" #dataCollection_UserOpt=\"ngModel\"\n                     placeholder=\"Data Collection User Opt:\">\n              <div [hidden]=\"dataCollection_UserOpt || dataCollection_UserOpt.pristine\" class=\"alert alert-danger\">\n                Auto Advance is required\n              </div>\n            </md-input-container>\n          </div>\n\n          <div class=\"form-group\">\n            <md-input-container class=\"settings-full-width\">\n              <input mdInput type=\"text\" class=\"form-control\" id=\"scoringEngine\" name=\"scoringEngine\"\n                     [(ngModel)]=\"platformValue.scoringEngine\" #scoringEngine=\"ngModel\" placeholder=\"Scoring Engine:\">\n              <div [hidden]=\"scoringEngine || scoringEngine.pristine\" class=\"alert alert-danger\">Scoring Engine is\n                required\n              </div>\n            </md-input-container>\n          </div>\n\n          <div class=\"form-group\">\n            <md-input-container class=\"settings-full-width\">\n              <input mdInput type=\"text\" class=\"form-control\" id=\"batterySelected\" name=\"batterySelected\"\n                     [(ngModel)]=\"platformValue.batterySelected\" #batterySelected=\"ngModel\"\n                     placeholder=\"Battery Selected:\">\n              <div [hidden]=\"batterySelected || batterySelected.pristine\" class=\"alert alert-danger\">Battery Selected\n                is required\n              </div>\n            </md-input-container>\n          </div>\n\n          <div class=\"form-group\">\n            <md-input-container class=\"settings-full-width\">\n              <input mdInput type=\"text\" class=\"form-control\" id=\"firstName\" name=\"firstName\"\n                     [(ngModel)]=\"platformValue.firstName\" #firstName=\"ngModel\" placeholder=\"First Name:\">\n              <div [hidden]=\"firstName || firstName.pristine\" class=\"alert alert-danger\">First Name is required</div>\n            </md-input-container>\n          </div>\n          <div class=\"form-group\">\n            <md-input-container class=\"settings-full-width\">\n              <input mdInput type=\"text\" class=\"form-control\" id=\"lastName\" name=\"lastName\"\n                     [(ngModel)]=\"platformValue.lastName\" #lastName=\"ngModel\" placeholder=\"Last Name:\">\n              <div [hidden]=\"lastName || lastName.pristine\" class=\"alert alert-danger\">First Name is required</div>\n            </md-input-container>\n          </div>\n          <div class=\"form-group\">\n\n            <md-input-container class=\"settings-full-width\">\n              <input mdInput type=\"text\" class=\"form-control\" id=\"middleName\" name=\"middleName\"\n                     [(ngModel)]=\"platformValue.middleName\" #middleName=\"ngModel\" placeholder=\"Middle Name:\">\n              <div [hidden]=\"middleName || middleName.pristine\" class=\"alert alert-danger\">Middle Name is required\n              </div>\n            </md-input-container>\n          </div>\n\n          <div>\n            {{platformValue | json}}\n          </div>\n        </div>\n\n\n        <md-card-actions>\n          <button md-button color=\"secondary\" md-raised-button (click)=\"validate()\"\n                  [disabled]=\"!enableManualEntryRelatedButtons\"> Disable Items\n          </button>\n\n          <button md-button color=\"secondary\" md-raised-button (click)=\"enable()\"\n                  [disabled]=\"!enableManualEntryRelatedButtons\"> Enable Items\n          </button>\n\n          <button md-button md-raised-button id=\"saveButton\" name=\"saveButton\"\n                  [disabled]=\"!enableManualEntryRelatedButtons\"\n                  md-raised-button (click)=\"sendSaveResponseEvent()\"> Save Responses\n          </button>\n\n          <button md-button md-raised-button color=\"primary\" [disabled]=\"!enableLoadManualEntryButton\"\n                  (click)=\"loadManualEntryForm()\"> Load Manual Entry\n          </button>\n\n        </md-card-actions>\n        <div>\n        </div>\n\n      </form>\n    </md-card-content>\n  </md-card>\n</div>\n"

/***/ }),

/***/ 286:
/***/ (function(module, exports) {

module.exports = "<div #ov></div>\n"

/***/ }),

/***/ 287:
/***/ (function(module, exports) {

module.exports = "<div>\n  <md-toolbar>Report Options\n\n    <md-chip-list class = \"toolbar-padding\" [hidden] = \"!showActions\">\n      <md-chip color=\"default\" selected=\"true\">{{selectedProduct}} &#10142;  {{selectedForm}} &#10142;  {{selectedReport}}</md-chip>\n    </md-chip-list>\n\n  </md-toolbar>\n  <md-card class=\"settings-card settings-basic\">\n    <md-card-header></md-card-header>\n\n    <md-card-content>\n\n      <form ngForm=\"reportForm\">\n        <table>\n          <tr>\n            <td class=\"td-padding\">\n              <md-select name=\"productSelect\" [(ngModel)]=\"selectedProduct\" (change)=\"productChange()\"\n                         [style.width]=\"'100%'\" placeholder=\"Products:\">\n                <md-optgroup>\n                  <md-option>Please select</md-option>\n                  <md-option *ngFor=\"let p of products\" [value]=\"p\">{{p}}</md-option>\n                </md-optgroup>\n              </md-select>\n\n            </td>\n            <td></td>\n            <td class=\"td-padding\">\n              <md-select name=\"formSelect\" id=\"formSelect\" [(ngModel)]=\"selectedForm\" (change)=\"formChange()\"\n                         [style.width]=\"'100%'\" placeholder=\"Forms: \">\n                <md-optgroup>\n                  <md-option>Please select</md-option>\n                  <md-option *ngFor=\"let f of forms\" [value]=\"f\">{{f}}</md-option>\n                </md-optgroup>\n\n              </md-select>\n            </td>\n\n            <td class=\"td-padding\">\n              <md-select name=\"reportSelect\" id=\"reportSelect\" [(ngModel)]=\"selectedReport\" (change)=\"reportChange()\"\n                         [style.width]=\"'100%'\" placeholder=\"Reports: \">\n                <md-optgroup>\n                  <md-option>Please select</md-option>\n                  <md-option *ngFor=\"let r of reports\" [value]=\"r\">{{r}}</md-option>\n                </md-optgroup>\n\n              </md-select>\n            </td>\n          </tr>\n        </table>\n      </form>\n\n    </md-card-content>\n    <md-card-actions>\n\n      <button md-raised-button color=\"primary\" (click)=\"saveOptionsJson()\" [disabled]=\"!showActions\"> Save Responses</button>\n      <button md-raised-button color=\"primary\" (click)=\"loadOptions()\" [disabled]=\"!showActions\"> Load Options</button>\n\n    </md-card-actions>\n\n    <md-card-footer>\n\n    </md-card-footer>\n  </md-card>\n</div>\n<p></p>\n<options-view></options-view>\n"

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(190);


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(124);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdChipsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdCardModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdMenuModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdTabsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdSelectModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdToolbarModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdChipsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdCardModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdMenuModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdTabsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdSelectModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MdToolbarModule */]],
        })
    ], CoreModule);
    return CoreModule;
}());

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiHostName: 'http://localhost:9001'
};
//# sourceMappingURL=environment.js.map

/***/ })

},[542]);
//# sourceMappingURL=main.bundle.js.map