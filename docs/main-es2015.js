(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _notes_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes-api.service */ "./src/app/notes-api.service.ts");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notes/notes.component */ "./src/app/notes/notes.component.ts");




class AppComponent {
    constructor(notesService) {
        this.notesService = notesService;
        this.notesService.initNotesList();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_notes_api_service__WEBPACK_IMPORTED_MODULE_1__["NotesApiService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-notes");
    } }, directives: [_notes_notes_component__WEBPACK_IMPORTED_MODULE_2__["NotesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], function () { return [{ type: _notes_api_service__WEBPACK_IMPORTED_MODULE_1__["NotesApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _notes_notes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notes/notes.component */ "./src/app/notes/notes.component.ts");
/* harmony import */ var _filter_notes_filter_notes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-notes/filter-notes.component */ "./src/app/filter-notes/filter-notes.component.ts");
/* harmony import */ var _notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notes-list/notes-list.component */ "./src/app/notes-list/notes-list.component.ts");
/* harmony import */ var _notes_view_notes_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notes-view/notes-view.component */ "./src/app/notes-view/notes-view.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_9__["reducers"], {
                metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_9__["metaReducers"]
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _notes_notes_component__WEBPACK_IMPORTED_MODULE_4__["NotesComponent"],
        _filter_notes_filter_notes_component__WEBPACK_IMPORTED_MODULE_5__["FilterNotesComponent"],
        _notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_6__["NotesListComponent"],
        _notes_view_notes_view_component__WEBPACK_IMPORTED_MODULE_7__["NotesViewComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _notes_notes_component__WEBPACK_IMPORTED_MODULE_4__["NotesComponent"],
                    _filter_notes_filter_notes_component__WEBPACK_IMPORTED_MODULE_5__["FilterNotesComponent"],
                    _notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_6__["NotesListComponent"],
                    _notes_view_notes_view_component__WEBPACK_IMPORTED_MODULE_7__["NotesViewComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_9__["reducers"], {
                        metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_9__["metaReducers"]
                    })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/filter-notes/filter-notes.component.ts":
/*!********************************************************!*\
  !*** ./src/app/filter-notes/filter-notes.component.ts ***!
  \********************************************************/
/*! exports provided: FilterNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterNotesComponent", function() { return FilterNotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _notes_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notes-api.service */ "./src/app/notes-api.service.ts");




class FilterNotesComponent {
    constructor(store, notesApiService) {
        this.store = store;
        this.notesApiService = notesApiService;
        this.listToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.notesList = [];
        this.openList = true;
        this.notesList = JSON.parse(localStorage.getItem('notesList'));
        if (window.screen.width >= 375 && window.screen.width <= 768) {
            this.openList = false;
        }
    }
    ngOnInit() {
    }
    addNewNote() {
        this.notesApiService.addNotes();
    }
    deleteNote() {
        this.notesApiService.deleteNote();
    }
    closeNotesList() {
        this.openList = !this.openList;
        this.listToggle.emit(this.openList);
    }
}
FilterNotesComponent.ɵfac = function FilterNotesComponent_Factory(t) { return new (t || FilterNotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_notes_api_service__WEBPACK_IMPORTED_MODULE_2__["NotesApiService"])); };
FilterNotesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterNotesComponent, selectors: [["app-filter-notes"]], outputs: { listToggle: "listToggle" }, decls: 9, vars: 1, consts: [[1, "filter-box"], [2, "float", "left", 3, "click"], [3, "click"]], template: function FilterNotesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterNotesComponent_Template_button_click_1_listener() { return ctx.closeNotesList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterNotesComponent_Template_button_click_3_listener() { return ctx.addNewNote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " New Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterNotesComponent_Template_button_click_7_listener() { return ctx.deleteNote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.openList ? "Close List" : "Open List");
    } }, styles: [".filter-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  background: lightgray;\n  display: flex;\n  justify-content: center;\n}\n.filter-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwZGV2YWxsYS9QZXJzb25hbC1Qcm9qZWN0cy9Ob3Rlcy1XZWItQXBwL3NyYy9hcHAvZmlsdGVyLW5vdGVzL2ZpbHRlci1ub3Rlcy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvZmlsdGVyLW5vdGVzL2ZpbHRlci1ub3Rlcy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNDSjtBREFJO0VBQ0ksWUFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvZmlsdGVyLW5vdGVzL2ZpbHRlci1ub3Rlcy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXItYm94XG4gICAgd2lkdGg6IDEwMCVcbiAgICBoZWlnaHQ6IDUwcHhcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXlcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgICBidXR0b25cbiAgICAgICAgbWFyZ2luOiAxMHB4IiwiLmZpbHRlci1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmZpbHRlci1ib3ggYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterNotesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filter-notes',
                templateUrl: './filter-notes.component.html',
                styleUrls: ['./filter-notes.component.sass']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _notes_api_service__WEBPACK_IMPORTED_MODULE_2__["NotesApiService"] }]; }, { listToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/notes-api.service.ts":
/*!**************************************!*\
  !*** ./src/app/notes-api.service.ts ***!
  \**************************************/
/*! exports provided: NotesApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesApiService", function() { return NotesApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class NotesApiService {
    constructor() {
        this.selectedNote = {};
        this.notesListSubcriber$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    initNotesList() {
        const notes = localStorage.getItem('notesList');
        if (!notes) {
            localStorage.setItem('notesList', JSON.stringify([]));
        }
        else {
            this.notesListSubcriber$.next(JSON.parse(notes));
        }
    }
    addNotes() {
        const notes = JSON.parse(localStorage.getItem('notesList'));
        notes.unshift({
            title: "New Note",
            description: "No additional text",
            timeStamp: (new Date()).toString()
        });
        localStorage.setItem('notesList', JSON.stringify(notes));
        this.notesListSubcriber$.next(notes);
    }
    editSelectedNote(data) {
        const notes = JSON.parse(localStorage.getItem('notesList'));
        notes[data['index']] = Object.assign({}, data);
        this.notesListSubcriber$.next(notes);
        localStorage.setItem('notesList', JSON.stringify(notes));
    }
    deleteNote() {
        const notes = JSON.parse(localStorage.getItem('notesList'));
        const selectedNote = JSON.parse(localStorage.getItem('selectedNote'));
        notes.splice(selectedNote['index'], 1);
        this.notesListSubcriber$.next(notes);
        localStorage.setItem('notesList', JSON.stringify(notes));
    }
    ngOnDestroy() {
        if (this.notesListSubcriber$) {
            this.notesListSubcriber$.unsubscribe();
        }
    }
}
NotesApiService.ɵfac = function NotesApiService_Factory(t) { return new (t || NotesApiService)(); };
NotesApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotesApiService, factory: NotesApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/notes-list/notes-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/notes-list/notes-list.component.ts ***!
  \****************************************************/
/*! exports provided: NotesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesListComponent", function() { return NotesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _notes_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notes-api.service */ "./src/app/notes-api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "selected-note": a0 }; };
function NotesListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotesListComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selectedNotes(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, i_r2 == ctx_r0.selected));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r1.title, " ", i_r2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 5, item_r1.timeStamp, "shortTime"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0 ", item_r1.description, "");
} }
const _c1 = function (a0) { return { "note-bck": a0 }; };
class NotesListComponent {
    constructor(notesApiService) {
        this.notesApiService = notesApiService;
        this.notes = [];
        this.selected = 0;
        this.getSelectedNote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.notesApiService.notesListSubcriber$.subscribe(notes => {
            this.notes = notes;
            const selectedNote = localStorage.getItem('selectedNote');
            this.getSelectedNote.emit(selectedNote ? JSON.parse(selectedNote) : Object.assign(Object.assign({}, this.notes[0]), { index: 0 }));
        });
    }
    selectedNotes(index) {
        this.selected = index;
        let selectedNote = this.notes[index];
        selectedNote['index'] = index;
        this.getSelectedNote.emit(selectedNote);
    }
}
NotesListComponent.ɵfac = function NotesListComponent_Factory(t) { return new (t || NotesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_notes_api_service__WEBPACK_IMPORTED_MODULE_1__["NotesApiService"])); };
NotesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotesListComponent, selectors: [["app-notes-list"]], outputs: { getSelectedNote: "getSelectedNote" }, decls: 2, vars: 4, consts: [[1, "list-panel", 3, "ngClass"], ["class", "list-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "list-item", 3, "ngClass", "click"]], template: function NotesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotesListComponent_div_1_Template, 8, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, !ctx.notes.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".list-panel[_ngcontent-%COMP%] {\n  height: 90vh;\n  overflow: auto;\n  border-right: 2px solid lightgray;\n  display: flex;\n  flex-direction: column;\n}\n.list-panel[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  border-bottom: 0.5px solid lightgray;\n  padding: 15px;\n}\n.selected-note[_ngcontent-%COMP%] {\n  background: lightsalmon;\n}\n.note-bck[_ngcontent-%COMP%] {\n  background-image: url('notes.jpg');\n  background-size: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwZGV2YWxsYS9QZXJzb25hbC1Qcm9qZWN0cy9Ob3Rlcy1XZWItQXBwL3NyYy9hcHAvbm90ZXMtbGlzdC9ub3Rlcy1saXN0LmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9ub3Rlcy1saXN0L25vdGVzLWxpc3QuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQ0o7QURBSTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtBQ0VSO0FEREE7RUFDSSx1QkFBQTtBQ0lKO0FESEE7RUFDSSxrQ0FBQTtFQUNBLHdCQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9ub3Rlcy1saXN0L25vdGVzLWxpc3QuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1wYW5lbFxuICAgIGhlaWdodDogOTB2aFxuICAgIG92ZXJmbG93OiBhdXRvXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmF5XG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cbiAgICAubGlzdC1pdGVtXG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIGxpZ2h0Z3JheVxuICAgICAgICBwYWRkaW5nOiAxNXB4XG4uc2VsZWN0ZWQtbm90ZVxuICAgIGJhY2tncm91bmQ6IGxpZ2h0c2FsbW9uXG4ubm90ZS1iY2tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9ub3Rlcy5qcGcnKVxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpblxuIiwiLmxpc3QtcGFuZWwge1xuICBoZWlnaHQ6IDkwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBsaWdodGdyYXk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubGlzdC1wYW5lbCAubGlzdC1pdGVtIHtcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uc2VsZWN0ZWQtbm90ZSB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0c2FsbW9uO1xufVxuXG4ubm90ZS1iY2sge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvbm90ZXMuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notes-list',
                templateUrl: './notes-list.component.html',
                styleUrls: ['./notes-list.component.sass']
            }]
    }], function () { return [{ type: _notes_api_service__WEBPACK_IMPORTED_MODULE_1__["NotesApiService"] }]; }, { getSelectedNote: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/notes-view/notes-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/notes-view/notes-view.component.ts ***!
  \****************************************************/
/*! exports provided: NotesViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesViewComponent", function() { return NotesViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _notes_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notes-api.service */ "./src/app/notes-api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function NotesViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " You can save notes by creating new notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotesViewComponent_textarea_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NotesViewComponent_textarea_2_Template_textarea_input_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.editSelectedNote($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.selectedNote.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedNote.description, "");
} }
class NotesViewComponent {
    constructor(notesApiService) {
        this.notesApiService = notesApiService;
        this.selectedNote = { description: '' };
    }
    ngOnInit() {
    }
    editSelectedNote(event) {
        this.selectedNote['description'] = event.target.value;
        this.notesApiService.editSelectedNote(this.selectedNote);
    }
    ngOnChanges(changes) {
        if (changes.selectedNote) {
            this.selectedNote = changes.selectedNote.currentValue;
        }
    }
}
NotesViewComponent.ɵfac = function NotesViewComponent_Factory(t) { return new (t || NotesViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_notes_api_service__WEBPACK_IMPORTED_MODULE_1__["NotesApiService"])); };
NotesViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotesViewComponent, selectors: [["app-notes-view"]], inputs: { selectedNote: "selectedNote" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [[1, "view-panel"], [4, "ngIf"], ["name", "notes", "id", "notes", "cols", "30", "rows", "10", 3, "value", "input", 4, "ngIf"], ["name", "notes", "id", "notes", "cols", "30", "rows", "10", 3, "value", "input"]], template: function NotesViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotesViewComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NotesViewComponent_textarea_2_Template, 2, 2, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedNote.description == undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedNote.description);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".view-panel[_ngcontent-%COMP%] {\n  margin: 30px;\n}\n.view-panel[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 70vw;\n  height: 75vh;\n  font-size: 15px;\n  background: whitesmoke;\n  border: 0.5px solid floralwhite;\n  padding: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwZGV2YWxsYS9QZXJzb25hbC1Qcm9qZWN0cy9Ob3Rlcy1XZWItQXBwL3NyYy9hcHAvbm90ZXMtdmlldy9ub3Rlcy12aWV3LmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9ub3Rlcy12aWV3L25vdGVzLXZpZXcuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7QURBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9ub3Rlcy12aWV3L25vdGVzLXZpZXcuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlldy1wYW5lbFxuICAgIG1hcmdpbjogMzBweFxuICAgIHRleHRhcmVhXG4gICAgICAgIHdpZHRoOiA3MHZ3XG4gICAgICAgIGhlaWdodDogNzV2aFxuICAgICAgICBmb250LXNpemU6IDE1cHhcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZVxuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGZsb3JhbHdoaXRlXG4gICAgICAgIHBhZGRpbmc6IDMwcHgiLCIudmlldy1wYW5lbCB7XG4gIG1hcmdpbjogMzBweDtcbn1cbi52aWV3LXBhbmVsIHRleHRhcmVhIHtcbiAgd2lkdGg6IDcwdnc7XG4gIGhlaWdodDogNzV2aDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIGZsb3JhbHdoaXRlO1xuICBwYWRkaW5nOiAzMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notes-view',
                templateUrl: './notes-view.component.html',
                styleUrls: ['./notes-view.component.sass']
            }]
    }], function () { return [{ type: _notes_api_service__WEBPACK_IMPORTED_MODULE_1__["NotesApiService"] }]; }, { selectedNote: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/notes/notes.component.ts":
/*!******************************************!*\
  !*** ./src/app/notes/notes.component.ts ***!
  \******************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _notes_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notes-api.service */ "./src/app/notes-api.service.ts");
/* harmony import */ var _filter_notes_filter_notes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter-notes/filter-notes.component */ "./src/app/filter-notes/filter-notes.component.ts");
/* harmony import */ var _notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../notes-list/notes-list.component */ "./src/app/notes-list/notes-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _notes_view_notes_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../notes-view/notes-view.component */ "./src/app/notes-view/notes-view.component.ts");







class NotesComponent {
    constructor(notesApiService) {
        this.notesApiService = notesApiService;
        this.listOpen = true;
        this.selectedNote = {};
        if (window.screen.width >= 375 && window.screen.width <= 768) {
            this.listOpen = false;
        }
    }
    ngOnInit() {
    }
    listToggle(value) {
        this.listOpen = value;
    }
    getSelectedNote(note) {
        this.selectedNote = note;
        localStorage.setItem('selectedNote', JSON.stringify(note));
    }
}
NotesComponent.ɵfac = function NotesComponent_Factory(t) { return new (t || NotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_notes_api_service__WEBPACK_IMPORTED_MODULE_1__["NotesApiService"])); };
NotesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotesComponent, selectors: [["app-notes"]], decls: 4, vars: 2, consts: [[3, "listToggle"], [2, "display", "flex"], [3, "ngClass", "getSelectedNote"], [3, "selectedNote"]], template: function NotesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-filter-notes", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("listToggle", function NotesComponent_Template_app_filter_notes_listToggle_0_listener($event) { return ctx.listToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-notes-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("getSelectedNote", function NotesComponent_Template_app_notes_list_getSelectedNote_2_listener($event) { return ctx.getSelectedNote($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-notes-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.listOpen ? "open-list" : "close-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedNote", ctx.selectedNote);
    } }, directives: [_filter_notes_filter_notes_component__WEBPACK_IMPORTED_MODULE_2__["FilterNotesComponent"], _notes_list_notes_list_component__WEBPACK_IMPORTED_MODULE_3__["NotesListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _notes_view_notes_view_component__WEBPACK_IMPORTED_MODULE_5__["NotesViewComponent"]], styles: [".close-list[_ngcontent-%COMP%] {\n  -webkit-animation: closeEffect 0.5s linear;\n          animation: closeEffect 0.5s linear;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes closeEffect {\n  from {\n    width: 25%;\n    opacity: 1;\n  }\n  to {\n    width: 0%;\n    opacity: 0;\n  }\n}\n\n@keyframes closeEffect {\n  from {\n    width: 25%;\n    opacity: 1;\n  }\n  to {\n    width: 0%;\n    opacity: 0;\n  }\n}\n\n.open-list[_ngcontent-%COMP%] {\n  -webkit-animation: openEffect 0.5s linear;\n          animation: openEffect 0.5s linear;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes openEffect {\n  from {\n    width: 0%;\n    opacity: 0;\n  }\n  to {\n    width: 25%;\n    opacity: 1;\n  }\n}\n\n@keyframes openEffect {\n  from {\n    width: 0%;\n    opacity: 0;\n  }\n  to {\n    width: 25%;\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW5kZWVwZGV2YWxsYS9QZXJzb25hbC1Qcm9qZWN0cy9Ob3Rlcy1XZWItQXBwL3NyYy9hcHAvbm90ZXMvbm90ZXMuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL25vdGVzL25vdGVzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7VUFBQSxrQ0FBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QUNDSjs7QURDQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLFVBQUE7RUNFTjtFRERFO0lBQ0ksU0FBQTtJQUNBLFVBQUE7RUNHTjtBQUNGOztBRFZBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsVUFBQTtFQ0VOO0VEREU7SUFDSSxTQUFBO0lBQ0EsVUFBQTtFQ0dOO0FBQ0Y7O0FESEE7RUFDSSx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtBQ0tKOztBREhBO0VBQ0k7SUFDSSxTQUFBO0lBQ0EsVUFBQTtFQ01OO0VETEU7SUFDSSxVQUFBO0lBQ0EsVUFBQTtFQ09OO0FBQ0Y7O0FEZEE7RUFDSTtJQUNJLFNBQUE7SUFDQSxVQUFBO0VDTU47RURMRTtJQUNJLFVBQUE7SUFDQSxVQUFBO0VDT047QUFDRiIsImZpbGUiOiJzcmMvYXBwL25vdGVzL25vdGVzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlLWxpc3RcbiAgICBhbmltYXRpb246IGNsb3NlRWZmZWN0IDAuNXMgbGluZWFyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHNcblxuQGtleWZyYW1lcyBjbG9zZUVmZmVjdFxuICAgIGZyb21cbiAgICAgICAgd2lkdGg6IDI1JVxuICAgICAgICBvcGFjaXR5OiAxXG4gICAgdG9cbiAgICAgICAgd2lkdGg6IDAlXG4gICAgICAgIG9wYWNpdHk6IDBcbi5vcGVuLWxpc3RcbiAgICBhbmltYXRpb246IG9wZW5FZmZlY3QgMC41cyBsaW5lYXJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkc1xuXG5Aa2V5ZnJhbWVzIG9wZW5FZmZlY3RcbiAgICBmcm9tXG4gICAgICAgIHdpZHRoOiAwJVxuICAgICAgICBvcGFjaXR5OiAwXG4gICAgdG9cbiAgICAgICAgd2lkdGg6IDI1JVxuICAgICAgICBvcGFjaXR5OiAxXG4iLCIuY2xvc2UtbGlzdCB7XG4gIGFuaW1hdGlvbjogY2xvc2VFZmZlY3QgMC41cyBsaW5lYXI7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGNsb3NlRWZmZWN0IHtcbiAgZnJvbSB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHRvIHtcbiAgICB3aWR0aDogMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLm9wZW4tbGlzdCB7XG4gIGFuaW1hdGlvbjogb3BlbkVmZmVjdCAwLjVzIGxpbmVhcjtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgb3BlbkVmZmVjdCB7XG4gIGZyb20ge1xuICAgIHdpZHRoOiAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notes',
                templateUrl: './notes.component.html',
                styleUrls: ['./notes.component.sass']
            }]
    }], function () { return [{ type: _notes_api_service__WEBPACK_IMPORTED_MODULE_1__["NotesApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

const reducers = {};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sandeepdevalla/Personal-Projects/Notes-Web-App/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map