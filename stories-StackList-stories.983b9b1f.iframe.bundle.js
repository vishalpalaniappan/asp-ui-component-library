/*! For license information please see stories-StackList-stories.983b9b1f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkasp_react_component_library=self.webpackChunkasp_react_component_library||[]).push([[569],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),__defProp=Object.defineProperty,ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!globalThis?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}var preview_exports={};((target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})})(preview_exports,{argsEnhancers:()=>argsEnhancers,loaders:()=>loaders});var isInInitialArgs=(name,initialArgs)=>typeof initialArgs[name]>"u"&&!(name in initialArgs),argsEnhancers=[context=>{let{initialArgs,argTypes,parameters:{actions:actions2}}=context;return actions2?.disable||!argTypes?{}:Object.entries(argTypes).filter((([name,argType])=>!!argType.action)).reduce(((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action("string"==typeof argType.action?argType.action:name)),acc)),{})},context=>{let{initialArgs,argTypes,id,parameters:{actions:actions2}}=context;if(!actions2||actions2.disable||!actions2.argTypesRegex||!argTypes)return{};let argTypesRegex=new RegExp(actions2.argTypesRegex);return Object.entries(argTypes).filter((([name])=>!!argTypesRegex.test(name))).reduce(((acc,[name,argType])=>(isInInitialArgs(name,initialArgs)&&(acc[name]=action(name,{implicit:!0,id})),acc)),{})}],subscribed=!1,loaders=[context=>{let{parameters:{actions:actions2}}=context;if(!actions2?.disable&&!subscribed&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in external_STORYBOOK_MODULE_GLOBAL_.global&&"function"==typeof external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_TEST_ON_MOCK_CALL__){(0,external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_TEST_ON_MOCK_CALL__)(((mock,args)=>{let name=mock.getMockName();"spy"!==name&&(!/^next\/.*::/.test(name)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some((prefix=>name.startsWith(prefix))))&&action(name)(args)})),subscribed=!0}}]},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/StackList/StackList.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.stackContainer{width:100%;height:100%;overflow-y:auto;scrollbar-gutter:stable;scrollbar-color:rgba(71,71,71,.4) #252526;scrollbar-width:thin;font-size:13px;font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif}.stackRow{display:flex;justify-content:space-between;height:30px;align-items:center;color:#fff;padding:0 20px}.stackRow:hover{cursor:pointer;background-color:#2a2d2e}.stackRow>.left{display:flex}.stackRow>.right{display:flex}.functionName{color:#fff}.fileName{color:#ccc;font-size:11px}.lineNumber{background:#4d4d4d;color:#b0ccc3;border-radius:5px;margin-left:10px;padding:0px 5px}',"",{version:3,sources:["webpack://./src/components/StackList/StackList.scss"],names:[],mappings:"AAEA,gBACI,UAAA,CACA,WAAA,CACA,eAAA,CACA,uBAAA,CACA,yCAAA,CACA,oBAAA,CACA,cAAA,CACA,uDAAA,CAGJ,UACI,YAAA,CACA,6BAAA,CACA,WAAA,CACA,kBAAA,CACA,UAAA,CACA,cAAA,CAGJ,gBACI,cAAA,CACA,wBAAA,CAGJ,gBACI,YAAA,CAGJ,iBACI,YAAA,CAGJ,cACI,UAAA,CAGJ,UACI,UAAA,CACA,cAAA,CAGJ,YACI,kBAAA,CACA,aAAA,CACA,iBAAA,CACA,gBAAA,CACA,eAAA",sourcesContent:["\n\n.stackContainer {\n    width: 100%;\n    height: 100%;\n    overflow-y: auto;\n    scrollbar-gutter: stable;\n    scrollbar-color: rgba(71, 71, 71, .4) #252526;\n    scrollbar-width: thin;\n    font-size: 13px;\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.stackRow {\n    display: flex;\n    justify-content: space-between;\n    height: 30px;\n    align-items: center;\n    color:white;\n    padding: 0 20px;\n}\n\n.stackRow:hover {\n    cursor: pointer;\n    background-color: #2a2d2e;\n}\n\n.stackRow > .left {\n    display: flex;\n}\n\n.stackRow > .right {\n    display: flex;\n}\n\n.functionName {\n    color: #fff;\n}\n\n.fileName {\n    color: #ccc;\n    font-size:11px;\n}\n\n.lineNumber {\n    background:#4d4d4d;\n    color:#b0ccc3;\n    border-radius:5px;\n    margin-left:10px;\n    padding:0px 5px;\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stories/StackListStories.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rootContainer{display:flex;justify-content:center;align-items:center;flex-direction:row;padding:100px}.stackContainer{height:200px;width:300px;background-color:#1b1c1d}","",{version:3,sources:["webpack://./src/stories/StackListStories.scss"],names:[],mappings:"AAAA,eACI,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,kBAAA,CACA,aAAA,CAGJ,gBACI,YAAA,CACA,WAAA,CACA,wBAAA",sourcesContent:[".rootContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    padding: 100px;\n}\n\n.stackContainer {\n    height: 200px;\n    width: 300px;\n    background-color: #1b1c1d;\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/prop-types/factoryWithThrowingShims.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var ReactPropTypesSecret=__webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret!==ReactPropTypesSecret){var err=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw err.name="Invariant Violation",err}}function getShim(){return shim}shim.isRequired=shim;var ReactPropTypes={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return ReactPropTypes.PropTypes=ReactPropTypes,ReactPropTypes}},"./node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":module=>{"use strict";module.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/react/cjs/react-jsx-runtime.production.js":(__unused_webpack_module,exports)=>{"use strict";var REACT_ELEMENT_TYPE=Symbol.for("react.transitional.element"),REACT_FRAGMENT_TYPE=Symbol.for("react.fragment");function jsxProd(type,config,maybeKey){var key=null;if(void 0!==maybeKey&&(key=""+maybeKey),void 0!==config.key&&(key=""+config.key),"key"in config)for(var propName in maybeKey={},config)"key"!==propName&&(maybeKey[propName]=config[propName]);else maybeKey=config;return config=maybeKey.ref,{$$typeof:REACT_ELEMENT_TYPE,type,key,ref:void 0!==config?config:null,props:maybeKey}}exports.Fragment=REACT_FRAGMENT_TYPE,exports.jsx=jsxProd,exports.jsxs=jsxProd},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}},"./src/stories/StackList.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,StackTopSelected:()=>StackTopSelected,WithException:()=>WithException,__namedExportsOrder:()=>__namedExportsOrder,default:()=>StackList_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),StackList=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/StackList/StackList.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(StackList.A,options);StackList.A&&StackList.A.locals&&StackList.A.locals;var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);const ROW_STYLE_SELECTED="#184b2d",ROW_STYLE_EXCEPTION="#420b0e",ROW_STYLE_SELECTED_TOP="#4b4b18",StackRow=({index,functionName,fileName,lineNumber,selected,selectTraceItem,hasException})=>{let style={};return selected&&0===index?style={backgroundColor:hasException?ROW_STYLE_EXCEPTION:ROW_STYLE_SELECTED_TOP}:selected&&(style={backgroundColor:hasException?ROW_STYLE_EXCEPTION:ROW_STYLE_SELECTED}),(0,jsx_runtime.jsxs)("div",{className:"stackRow",style,onClick:e=>selectTraceItem(index),children:[(0,jsx_runtime.jsx)("div",{className:"left",children:(0,jsx_runtime.jsx)("span",{className:"functionName",children:functionName})}),(0,jsx_runtime.jsxs)("div",{className:"right",children:[(0,jsx_runtime.jsx)("span",{className:"fileName",children:fileName}),(0,jsx_runtime.jsxs)("span",{className:"lineNumber",children:[lineNumber,":1"]})]})]})};StackRow.propTypes={index:prop_types_default().number,functionName:prop_types_default().string,fileName:prop_types_default().string,lineNumber:prop_types_default().number,selected:prop_types_default().bool,onSelectStackPos:prop_types_default().func,hasException:prop_types_default().bool};const StackList_StackList_StackList=({traces,selectTraceItem})=>(0,jsx_runtime.jsx)("div",{className:"stackContainer",children:traces.map(((trace,index)=>(0,jsx_runtime.jsx)(StackRow,{functionName:trace.functionName,fileName:trace.fileName,lineNumber:trace.lineNumber,selected:trace.selected,hasException:trace.hasException,index,selectTraceItem},`${trace.fileName}-${trace.lineNumber}-${trace.functionName}`)))});StackList_StackList_StackList.propTypes={traces:prop_types_default().array,selectTraceItem:prop_types_default().func},StackList_StackList_StackList.__docgenInfo={description:"Renders the stack list component.\n\n@param {Array} traces \n@param {Function} selectTraceItem \n@return {JSX}",methods:[],displayName:"StackList",props:{traces:{description:"",type:{name:"array"},required:!1},selectTraceItem:{description:"",type:{name:"func"},required:!1}}};var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),StackListStories=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stories/StackListStories.scss"),StackListStories_options={};StackListStories_options.styleTagTransform=styleTagTransform_default(),StackListStories_options.setAttributes=setAttributesWithoutAttributes_default(),StackListStories_options.insert=insertBySelector_default().bind(null,"head"),StackListStories_options.domAPI=styleDomAPI_default(),StackListStories_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(StackListStories.A,StackListStories_options);StackListStories.A&&StackListStories.A.locals&&StackListStories.A.locals;const StackList_stories={title:"CallStack",component:StackList_StackList_StackList,argTypes:{traces:{type:"array"}}},Template=args=>{const[,updateArgs]=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useArgs)(),selectTraceItem=selectedIndex=>{(0,dist.XI)("Selected Stack Position:")(selectedIndex);const newTraces=[];args.traces.forEach(((value,index)=>{value.selected=selectedIndex==index,newTraces.push(value)})),updateArgs({traces:newTraces})};return(0,react.useEffect)((()=>{updateArgs({selectTraceItem})}),[]),(0,jsx_runtime.jsx)("div",{className:"rootContainer",children:(0,jsx_runtime.jsx)("div",{className:"stackContainer",children:(0,jsx_runtime.jsx)(StackList_StackList_StackList,{...args})})})},Default=Template.bind({});Default.args={traces:[{functionName:"visit_arg",fileName:"helper.py",lineNumber:3},{functionName:"__init__",fileName:"helper.py",lineNumber:65},{functionName:"injectLogTypesA",fileName:"LogInjector.py",lineNumber:3,selected:!0},{functionName:"visit_import",fileName:"LogInjector.py",lineNumber:3},{functionName:"__init__",fileName:"LogInjector.py",lineNumber:65},{functionName:"run",fileName:"ProgramProcessor.py",lineNumber:3},{functionName:"main",fileName:"main.py",lineNumber:3},{functionName:"<module>",fileName:"main.py",lineNumber:65}]};const StackTopSelected=Template.bind({});StackTopSelected.args={traces:[{functionName:"visit_arg",fileName:"helper.py",lineNumber:3,selected:!0},{functionName:"__init__",fileName:"helper.py",lineNumber:65},{functionName:"injectLogTypesA",fileName:"LogInjector.py",lineNumber:3},{functionName:"visit_import",fileName:"LogInjector.py",lineNumber:3},{functionName:"__init__",fileName:"LogInjector.py",lineNumber:65},{functionName:"run",fileName:"ProgramProcessor.py",lineNumber:3},{functionName:"main",fileName:"main.py",lineNumber:3},{functionName:"<module>",fileName:"main.py",lineNumber:65}]};const WithException=Template.bind({});WithException.args={traces:[{functionName:"visit_arg",fileName:"helper.py",hasException:!0,lineNumber:3,selected:!0},{functionName:"__init__",fileName:"helper.py",lineNumber:65},{functionName:"injectLogTypesA",fileName:"LogInjector.py",lineNumber:3},{functionName:"visit_import",fileName:"LogInjector.py",lineNumber:3},{functionName:"__init__",fileName:"LogInjector.py",lineNumber:65},{functionName:"run",fileName:"ProgramProcessor.py",lineNumber:3},{functionName:"main",fileName:"main.py",lineNumber:3},{functionName:"<module>",fileName:"main.py",lineNumber:65}]};const __namedExportsOrder=["Default","StackTopSelected","WithException"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  const [, updateArgs] = useArgs();\n  const selectTraceItem = selectedIndex => {\n    action(\'Selected Stack Position:\')(selectedIndex);\n    const newTraces = [];\n    args.traces.forEach((value, index) => {\n      value.selected = selectedIndex == index;\n      newTraces.push(value);\n    });\n    updateArgs({\n      traces: newTraces\n    });\n  };\n  useEffect(() => {\n    updateArgs({\n      selectTraceItem: selectTraceItem\n    });\n  }, []);\n  return <div className="rootContainer">\n            <div className="stackContainer">\n                <StackList {...args} /> \n            </div>\n        </div>;\n}',...Default.parameters?.docs?.source}}},StackTopSelected.parameters={...StackTopSelected.parameters,docs:{...StackTopSelected.parameters?.docs,source:{originalSource:'args => {\n  const [, updateArgs] = useArgs();\n  const selectTraceItem = selectedIndex => {\n    action(\'Selected Stack Position:\')(selectedIndex);\n    const newTraces = [];\n    args.traces.forEach((value, index) => {\n      value.selected = selectedIndex == index;\n      newTraces.push(value);\n    });\n    updateArgs({\n      traces: newTraces\n    });\n  };\n  useEffect(() => {\n    updateArgs({\n      selectTraceItem: selectTraceItem\n    });\n  }, []);\n  return <div className="rootContainer">\n            <div className="stackContainer">\n                <StackList {...args} /> \n            </div>\n        </div>;\n}',...StackTopSelected.parameters?.docs?.source}}},WithException.parameters={...WithException.parameters,docs:{...WithException.parameters?.docs,source:{originalSource:'args => {\n  const [, updateArgs] = useArgs();\n  const selectTraceItem = selectedIndex => {\n    action(\'Selected Stack Position:\')(selectedIndex);\n    const newTraces = [];\n    args.traces.forEach((value, index) => {\n      value.selected = selectedIndex == index;\n      newTraces.push(value);\n    });\n    updateArgs({\n      traces: newTraces\n    });\n  };\n  useEffect(() => {\n    updateArgs({\n      selectTraceItem: selectTraceItem\n    });\n  }, []);\n  return <div className="rootContainer">\n            <div className="stackContainer">\n                <StackList {...args} /> \n            </div>\n        </div>;\n}',...WithException.parameters?.docs?.source}}}}}]);