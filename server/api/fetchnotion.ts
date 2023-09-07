import { Client } from "@notionhq/client";
import * as dotenv from "dotenv";
dotenv.config();
const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_DATABASE = process.env.NOTION_DATABASE;


export default async function handler() {
    try {
        // Initialize the Notion client
        const notion = new Client({
            auth: NOTION_TOKEN
        });

        // Query the Notion database
        const response = await notion.databases.query({
            database_id: NOTION_DATABASE as string,
            "filter" :{
                "property" : "Status",
                "status" : {
                    "equals": "Live"
               },
             },
        });

        const data = JSON.parse(JSON.stringify(response.results));
        return {
            statusCode: 200,
            body: data,

        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Error querying Notion database" }),
        };
    }
}

  