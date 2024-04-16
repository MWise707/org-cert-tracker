import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "../.env"});

const { PORT, DATABASE_URL } = process.env;

const client = new pg.Client({
  connectionString: DATABASE_URL,
});

(async () => {
  await client.connect();
  const app = express();
  app.use(express.json());

  app.get("/techs", async (req, res, next) => {
    try {
      const query = "SELECT * from techs";
      const data = await client.query(query);
      res.status(200).send(data.rows);
    }
    catch (error) {
      console.error("Error with tech query", error);
      next(error);
    }
  })

  app.use((err, req, res, next) => {
    console.error("Reached middleware error handling", err.stack);
    res.status(500).send("Sorry - something went wrong!");
  });

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
})