const express = require("express");
const app = express();
const fs = require("fs");
const notes = require("../db/db.json");
const uuid = require("uuid/v1");