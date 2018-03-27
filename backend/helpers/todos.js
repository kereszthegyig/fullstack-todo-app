var db = require("../models");

exports.getTodos = function(req, res){
    db.Todo.find()
        .then(function(todos){
            res.json(todos)
        })
        .catch(function(err){
            res.send(err)
        })
}

exports.createTodo = function(req, res){
    db.Todo.create(req.body)
        .then(function(newTodo){
            res.status(201).json(newTodo)
        })
        .catch(function(err){
            res.send(err)
        })
}

exports.getTodo = function(req, res){
    db.Todo.findById(req.params.id)
        .then(function(foundTodo){
            res.json(foundTodo)
        })
        .catch(function(err){
            res.send(err)
        })
}


exports.updateTodo = function(req, res){
    db.Todo.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(function(updatedTodo){
            res.json(updatedTodo)
        })
        .catch(function(err){
            res.send(err);
        })
}

exports.removeTodo = function(req, res){
    db.Todo.findByIdAndRemove({_id: req.params.id})
        .then(function(){
            res.send({message: "Todo has deleted from database."})
        })
        .catch(function(err){
            res.send(err)
        })
}

module.exports = exports