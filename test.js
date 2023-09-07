function fetchData() {
    return fetch("http://localhost:3000/api/fetchnotion")
      .then((res) => res.json())
      .then((data) => {
        // Map through the data and extract page information
        const pages = data.body.map((page) => {
          const name = page.properties.Name ? page.properties.Name.title[0].plain_text : "Name Not Available";
          const image = page.properties.Image ? page.properties.Image.files[0]?.external?.url : "Image Not Available";
          const url = page.properties.URL ? page.properties.URL.url : "URL Not Available";
          const description = page.properties.Description ? page.properties.Description.rich_text[0].plain_text : "Description Not Available";
  
          return {
            name,
            image,
            url,
            description,
          };
        });
  
        console.log(pages);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  
fetchData();
  
