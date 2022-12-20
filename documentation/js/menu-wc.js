'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">to-do-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d0b07a3c3004aa44db0e46b3b13e8d29a7f76809044ac6ef293e2a8b07488f4b2dc58abf1cfbe847db09e39a389f1ab83514e9281ea84dd90dc483daa0d6c20d"' : 'data-target="#xs-components-links-module-AppModule-d0b07a3c3004aa44db0e46b3b13e8d29a7f76809044ac6ef293e2a8b07488f4b2dc58abf1cfbe847db09e39a389f1ab83514e9281ea84dd90dc483daa0d6c20d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d0b07a3c3004aa44db0e46b3b13e8d29a7f76809044ac6ef293e2a8b07488f4b2dc58abf1cfbe847db09e39a389f1ab83514e9281ea84dd90dc483daa0d6c20d"' :
                                            'id="xs-components-links-module-AppModule-d0b07a3c3004aa44db0e46b3b13e8d29a7f76809044ac6ef293e2a8b07488f4b2dc58abf1cfbe847db09e39a389f1ab83514e9281ea84dd90dc483daa0d6c20d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TodoModule.html" data-type="entity-link" >TodoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TodoModule-8898ef681a056246f23e3a67bf7bf74cbcd84d26a600404139ba037fd78f36ee75207372f24ebd6359f0d6c6688858ebd826532229dd6e44e191c5c26808f30c"' : 'data-target="#xs-components-links-module-TodoModule-8898ef681a056246f23e3a67bf7bf74cbcd84d26a600404139ba037fd78f36ee75207372f24ebd6359f0d6c6688858ebd826532229dd6e44e191c5c26808f30c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TodoModule-8898ef681a056246f23e3a67bf7bf74cbcd84d26a600404139ba037fd78f36ee75207372f24ebd6359f0d6c6688858ebd826532229dd6e44e191c5c26808f30c"' :
                                            'id="xs-components-links-module-TodoModule-8898ef681a056246f23e3a67bf7bf74cbcd84d26a600404139ba037fd78f36ee75207372f24ebd6359f0d6c6688858ebd826532229dd6e44e191c5c26808f30c"' }>
                                            <li class="link">
                                                <a href="components/TodoAddComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoAddComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TodoFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TodoItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TodoListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TodoPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Todo.html" data-type="entity-link" >Todo</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link" >AppState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});