const todoController = require("../../controllers/todoController");
const TodoModel = require("../../model/todoModel");
const httpMocks = require("node-mocks-http");
const newTodo = require("../mock-data/new-todo.json");

TodoModel.create = jest.fn();

let req, res, next;

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

describe("todoController.createTodo", () => {
  beforeEach(() => {
    req.body = newTodo;
  });
  it("should have a createTodo function", () => {
    expect(typeof todoController.createTodo).toBe("function");
  });
  it("should call TodoModel.create", () => {
    todoController.createTodo(req, res, next);
    expect(TodoModel.create).toBeCalledWith(newTodo);
  });
  it("should return 201 response code", async () => {
    await todoController.createTodo(req, res, next);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });
  it("should return json body in response", async () => {
    TodoModel.create.mockReturnValue(newTodo);
    await todoController.createTodo(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newTodo);
  });
  it("should handle errors", async () => {
    const errorMessage = { message: "Done property missing" };
    const rejectedPromise = Promise.reject(errorMessage);
    TodoModel.create.mockReturnValue(rejectedPromise);
    await todoController.createTodo(req, res, next);
    expect(next).toBeCalledWith(errorMessage);
  });
});
