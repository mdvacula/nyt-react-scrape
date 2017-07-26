import axios from 'axios';

const API_KEY = "4a3b918488d74d629b46e5ae3538885a"

const getResults = (query) => {
   console.log(getResults);
   let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
   return axios.get(
      url, {
         params: {
            'api-key': API_KEY,
            'q': query.topic,
            'begin_date': query.startDate,
            'end_date': query.endDate
         }
      });
   };

 const saveArticle = (article) => {
      return axios.post("api/saved", {
         title: article.title,
         date: article.date,
         url: article.url
      });
   };

   const getSaved = () => {
      return axios.get("api/saved");
   };

   const deleteArticle = (article) => {
      console.log(article._id);
     return axios.delete("api/saved/" + article._id, {});
   }

export {getResults};
export {saveArticle};
export {getSaved};
export {deleteArticle};
