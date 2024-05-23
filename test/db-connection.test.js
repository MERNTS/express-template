const mongoose = require("mongoose");
const ArticleService = require("../services/ArticleService");

describe("Connection", () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_YY, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        })
    });

    test("Retrieve article by Id", async () => {
        const id = "5ff2454f94eeee0a7acb5c30";
        const article =  await ArticleService.getArticlebyId(id);
        expect(article.title).toBe("This is another post example");
    });

    afterAll(async done => {
        mongoose.disconnect();
        done();
    });

});