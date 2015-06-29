/// <reference path="../../../scripts/typings/knockout/knockout.d.ts" />

import ko = require("knockout");
import $ = require("jquery");

class FadeVisibleHandler implements KnockoutBindingHandler {
    static init(element, valueAccessor) {
        var value = valueAccessor();
        $(element).toggle(ko.utils.unwrapObservable(value));
    }

    static update(element, valueAccessor) {
        // Whenever the value subsequently changes, slowly fade the element in or out
        var value = valueAccessor();
        ko.utils.unwrapObservable(value) ? $(element).fadeIn() : $(element).fadeOut();
    }
}

ko.bindingHandlers["fadeVisible"] = FadeVisibleHandler;

var planets = ko.observableArray([
    { name: "Mercury", typeName: "rock" },
    { name: "Venus", typeName: "rock" },
    { name: "Earth", typeName: "rock" },
    { name: "Mars", typeName: "rock" },
    { name: "Jupiter", typeName: "gasgiant" },
    { name: "Saturn", typeName: "gasgiant" },
    { name: "Uranus", typeName: "gasgiant" },
    { name: "Neptune", typeName: "gasgiant" },
    { name: "Pluto", typeName: "rock" }
]);

var typeToShow = ko.observable<String>("all");

var vm = {
    planets: planets,
    typeToShow: typeToShow,
    displayAdvancedOptions: ko.observable(false),
    addPlanet: (typeName: string) => {
        planets.push({ name: "New planet", typeName: typeName });
    },
    planetsToShow: ko.computed(() => {
        // Represents a filtered list of planets
        // i.e., only those matching the "typeToShow" condition
        var desiredType = typeToShow();
        if (desiredType === "all") {
            return planets();
        }

        return ko.utils.arrayFilter(planets(), (planet: {name:string, typeName: string}) => {
            return planet.typeName === desiredType;
        });
    }),
    showPlanetElement: (elem) => {
        if (elem.nodeType === 1) {
            $(elem).hide().slideDown();
        }
    },
    hidePlanetElement: (elem) => {
        if (elem.nodeType === 1) {
            $(elem).slideUp(() => { $(elem).remove(); });
        }
    }
};

export = vm;