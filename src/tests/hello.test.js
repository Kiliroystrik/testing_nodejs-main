const controller = require("../hello");

const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/", controller);

test("hello route works", done => {
    request(app)
        .get("/hello/John")
        .expect("Content-Type", "text/html; charset=utf-8")
        .expect(200, done);
});

test("goodbye route works", done => {
    request(app)
        .get("/goodbye/John")
        .expect("Content-Type", "text/html; charset=utf-8")
        .expect(200, done);
});

//test pour voir si mon commit a bien fonctionne pour les actions
