import express from "express";
import cors from "cors";
import axios from "axios";
/* import dotenv from "dotenv" */

const PORT = 8000;

const app = express();
app.use(cors());
app.use(express.json());

const url =
	"https://53858bd7-ffb3-454b-9368-3df7b480cf86-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks";

const token =
	"AstraCS:KduKWXTdGZSAzMnUYyTcbPfp:9d7c23c79f521cba8cbeae9124cfdd19f89ef8784c3e1f91d64acb1e81c557a8";

/* GET */
app.get("/tickets", async (req, res) => {
	const options = {
		method: "GET",
		headers: {
			"Accepts": "application/json",
			"X-cassandra-Token": token,
		},
	};
	try {
		const response = await axios(`${url}?page-size=20`, options);
		res.status(200).json(response.data);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error });
	}
});

/* POST */
app.post("/tickets", async (req, res) => {
	const formData = req.body.formData;

	const options = {
		method: "POST",
		headers: {
			"Accepts": "application/json",
			"X-Cassandra-Token": token,
			"Content-Type": "application/json",
		},
		data: formData,
	};
	try {
		const response = await axios(url, options);
		res.status(200).json(response.data);
	} catch (error) {
		console.log(error.response.data);
		res.status(500).json({ message: error });
	}
});

app.listen(PORT, () => console.log("server is runing on PORT" + PORT));
