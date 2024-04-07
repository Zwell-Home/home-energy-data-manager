
/**
 * File: mongooseModels.js
 * Description: This file defines the Mongoose schemas and models for the collections.
 * The models are created using the database instances imported from '../config/mongodb'.
 * 
 * @requires mongoose
 * @requires ../config/mongodb
 * 
 * @exports Appliances
 * @exports HVAC_Appliances
 * @exports Home_Decades,
 * @exports  Home_Type,  
 * @exports State_Data,
 * @exports Zip_Code_Data,
 * @exports Densified_Biomass_Prices
 */

import mongoose, { Schema } from 'mongoose';
// const { test, Home_Energy_Data } = require('../config/mongodb');

export const appliancesSchema = new Schema({
    _id: String,
    appliance: String,
    fuel_type: String,
    unit: String,
    per_year: Number,
    avg_price: Number,
    lifespan: Number
});

export const hvac_appliancesSchema = new Schema({
    _id: String,
    default_unit_type: String,
    description: String,
    efficiency: Number,
    external_link: String,
    fuel: String,
    function: String,
    icon: String,
    lifespan: Number,
    system: String,
    creation_date: String,
    modified_date: String,
    slug: String,
    creator: String,
    unique_id: String,
    display_name: String
});

export const home_decadesSchema = new Schema({
    _id: String,
    decade: String,
    prob_of_insulation: Number,
    insulation: String,
    insulation_r_in: Number,
    wall_insulation_r: Number,
    wall_construction: Number,
    wall_siding: Number,
    wall_r: Number,
    attic_insulation_r: Number,
    joist: Number,
    roof: Number,
    attic_r: Number,
    ach: Number
});

export const home_typeSchema = new Schema({
    _id: String,
    home_type: String,
    shared_walls: Number,
    shared_ceilings: Number,
});

export const state_tableSchema = new Schema({
    _id: String,
    State: String,
    Abbreviation: String,
    'State Emissions': Array,
    'State Energy Costs': Array,
    'State Energy Breakdown': Array
});

export const zip_tableSchema = new Schema({
    _id: String,
    state: String,
    zipcode: String,
    primary_city: String,
    latitude: Number,
    longitude: Number,
    degree_days: Object,
    water_temperature_data: Object,
});

export const wood_tableSchema = new Schema({
    _id: String,
    date: String,
    price: String,
});

// create models from schema
// const Appliances = test.model('Appliances', appliancesSchema, 'Appliances');
// const HVAC_Appliances = test.model('HVAC Appliances', hvac_appliancesSchema, 'HVAC_Appliances');
// const Home_Decades = test.model('Home Decades', home_decadesSchema, 'Home_Decades');
// const Home_Type = test.model('Home Type', home_typeSchema, 'Home_Type');
// const State_Data = Home_Energy_Data.model('State Data', state_tableSchema, 'State_Data');
// const Zip_Code_Data = Home_Energy_Data.model('Zip Code Data', zip_tableSchema, 'Zip_Code_Data');
// const Densified_Biomass_Prices = Home_Energy_Data.model('Densified Biomass Prices', wood_tableSchema, 'Densified_Biomass_Prices');

// module.exports = {
//     Appliances,
//     HVAC_Appliances,
//     Home_Decades,
//     Home_Type,
//     State_Data,
//     Zip_Code_Data,
//     Densified_Biomass_Prices
// };
