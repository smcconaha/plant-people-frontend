import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../context/GlobalState';

function Listing() {
  const [ state, dispatch ] = useGlobalState();
  
  return (
    <main class="container">
    <div class="p-4 p-md-5 mb-4 rounded text-bg-dark">
        <div class="col-md-6 px-0">
        <h1 class="display-4 fst-italic"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Longer featured post title</font></font></h1>
        <p class="lead my-3"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Several multiple lines of text cross-check, to quickly and efficiently inform new readers about the most interesting things in the contents of this post.</font></font></p>
        <p class="lead mb-0"><a href="#" class="text-white fw-bold"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Continue reading...</font></font></a></p>
        </div>
    </div>

    <div class="row mb-2">
        <div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">the scientist</font></font></strong>
            <h3 class="mb-0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Featured post</font></font></h3>
            <div class="mb-1 text-muted"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">November 12</font></font></div>
            <p class="card-text mb-auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">This is a broader card with supporting text below as a natural introduction to additional content.</font></font></p>
            <a href="#" class="stretched-link"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Read on</font></font></a>
            </div>
            <div class="col-auto d-none d-lg-block">
            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg>

            </div>
        </div>
        </div>
        <div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-success"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">the design</font></font></strong>
            <h3 class="mb-0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Job title</font></font></h3>
            <div class="mb-1 text-muted"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">November 11</font></font></div>
            <p class="mb-auto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">This is a broader card with supporting text below as a natural introduction to additional content.</font></font></p>
            <a href="#" class="stretched-link"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Read on</font></font></a>
            </div>
            <div class="col-auto d-none d-lg-block">
            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">صورة مصغرة</text></svg>

            </div>
        </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-8">
        <h3 class="pb-4 mb-4 fst-italic border-bottom"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
            from Firehose
        </font></font></h3>

        <article class="blog-post">
            <h2 class="blog-post-title mb-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Example of a post</font></font></h2>
            <p class="blog-post-meta"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">January 1, 2021 by </font></font><a href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mark</font></font></a></p>

            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">This blog post shows a few different types of content that are powered and designed with Bootstrap. </font><font style="vertical-align: inherit;">Body text, images, and code are fully supported.</font></font></p>
            <hr/>
            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Securing food in the future is an issue that worries the world's governments and scientists alike. </font><font style="vertical-align: inherit;">During the twentieth century, the Earth's population increased fourfold, and it is estimated that the number will reach ten billion people by the year 2050 AD. </font><font style="vertical-align: inherit;">This huge increase will represent a major challenge and mounting pressure on agricultural production capacity. </font><font style="vertical-align: inherit;">Which was and must have prompted the development of innovative technologies in the manufacture of food other than agriculture, including a future technology based on the manufacture of food from the air.</font></font></p>
            <blockquote>
            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Agriculture occupies large areas of land and consumes huge amounts of water, and food production through agriculture contributes a high percentage of global greenhouse gas emissions</font></font></p>
            </blockquote>
            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Agriculture takes up large areas of land and consumes huge amounts of water. </font><font style="vertical-align: inherit;">In addition, food production through agriculture contributes to a high percentage of global greenhouse gas emissions. For comparison, this percentage of emissions is greater than what is produced by the transport sector with all its cars, trucks, planes and trains.</font></font></p>
            <h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Title</font></font></h2>
            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Plants get their food by a process called photosynthesis, in which plants convert sunlight, water and carbon dioxide from the atmosphere into food and release oxygen as a by-product of this chemical reaction. </font><font style="vertical-align: inherit;">This process occurs in the Chloroplast. </font><font style="vertical-align: inherit;">Plants take advantage of the energy of sunlight to split water into hydrogen and oxygen, and other chemical reactions occur that result in glucose, which they use as a food source, and oxygen is released from plants into the atmosphere. </font><font style="vertical-align: inherit;">This means that plants convert carbon dioxide into food through complex chemical reactions. </font><font style="vertical-align: inherit;">Photosynthesis is one of the most important chemical reactions on Earth. In the past, it helped the evolution of our planet and the emergence of life on it. </font><font style="vertical-align: inherit;">Plants use carbon dioxide to make their own food, and they release oxygen to help other organisms breathe!</font></font></p>
            <h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sub-address</font></font></h3>
            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">This process inspired NASA scientists during the 1960s to explore the idea of &ZeroWidthSpace;&ZeroWidthSpace;feeding astronauts on long space missions such as traveling to Mars. </font><font style="vertical-align: inherit;">One of the promising ideas was to manufacture food using carbon dioxide produced by astronauts, but not by plants, but by small single-celled microbes that are able to harvest carbon dioxide to produce abundant amounts of nutritious protein in the form of a flavorless powder. The substance can also be used in making the foods we are familiar with.</font></font></p>
            <pre><code>Example code block</code></pre>
            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Contrary to what is the case in the plant world, these microbes do not use light as the process of photosynthesis that plants use to obtain food, that is, because they are able to grow in the dark. </font><font style="vertical-align: inherit;">These bacteria are called Hydrogenotrophs, and they use hydrogen as a fuel to produce food from carbon dioxide. </font><font style="vertical-align: inherit;">When astronauts produce carbon dioxide, microbes pick it up and, along with other inputs, turn it into carbon-rich food. </font><font style="vertical-align: inherit;">In this way we will obtain a closed loop carbon cycle.</font></font></p>
            <h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sub-address</font></font></h3>
            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">After more than half a century of NASA research, several companies in the synthetic biology sector, including Air Protein and Solar Foods, are working on developing a new generation of sustainable food products, with no carbon footprint. </font><font style="vertical-align: inherit;">And these food products will not be limited to astronauts only, but will extend to all the inhabitants of the Earth, and they will be produced in a short period of time, instead of months, and without relying on agricultural lands. </font><font style="vertical-align: inherit;">This means getting food products very quickly. </font><font style="vertical-align: inherit;">It will also become possible to manufacture food in a vertical way through these microbes, instead of the traditional horizontal method similar to modern vertical farming technology. </font><font style="vertical-align: inherit;">This means providing food products that are larger than the same area.</font></font></p>
            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Human food consists of three main types:</font></font></p>
            <ul>
            <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">proteins</font></font></li>
            <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">carbohydrates</font></font></li>
            <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Fats</font></font></li>
            </ul>
            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Proteins are composed of amino acids, which are a group of organic compounds that number twenty in the human body, including nine essential that the body gets from food. </font><font style="vertical-align: inherit;">Amino acids consist mainly of:</font></font></p>
            <ol>
            <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">carbon</font></font></li>
            <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">hydrogen</font></font></li>
            <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">oxygen</font></font></li>
            <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nitrogen</font></font></li>
            </ol>
            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">It is noted that nitrogen constitutes 78% of the air, and hydrogen we get through the electrolysis of water, and it is theoretically possible to withdraw carbon from the air to form these acids, because carbon is the backbone of amino acids, and life on the planet is based on Carbon for its ability to form long carbon chains, and this is what microbes do by manufacturing amino acids from carbon dioxide through a set of complex chemical reactions. </font><font style="vertical-align: inherit;">In addition to making protein-rich meals, these microbes produce other products, such as oils, that have many uses.</font></font></p>
        </article>

        <article class="blog-post">
            <h2 class="blog-post-title mb-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Another post</font></font></h2>
            <p class="blog-post-meta"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">December 23, 2020 by </font></font><a href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jacob</font></font></a></p>

            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nowadays, several companies are studying these microbes more deeply and cultivating them for food. </font><font style="vertical-align: inherit;">In 2019, researchers at the American company (Air Protein) announced their success in converting carbon dioxide in the air into industrial meat made of protein, which does not require any agricultural land, but rather depends mainly on air.</font></font></p>
            <blockquote>
            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Meat was made in many types</font></font></p>
            </blockquote>
            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">These researchers used air and renewable energy as inputs in a fermentation-like process to produce a protein that contains the nine essential amino acids and is rich in vitamins and minerals, and is free of hormones, antibiotics, pesticides and herbicides.</font></font></p>
            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Meat was processed in many types, including poultry, cows and seafood, without carbon emissions, in contrast to raising cows, which contribute to the emission of methane, a greenhouse gas.</font></font></p>
        </article>

        <article class="blog-post">
            <h2 class="blog-post-title mb-1"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">New feature</font></font></h2>
            <p class="blog-post-meta"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">December 14, 2020 by </font></font><a href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jacob</font></font></a></p>

            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">And the Finnish company (Solar Foods) has developed a technology to produce protein from air, as the process begins by splitting water into its components hydrogen and oxygen through electricity. </font><font style="vertical-align: inherit;">Hydrogen provides the energy for bacteria to convert carbon dioxide and nitrogen in the air into protein-rich organic matter more efficiently than plants grow using photosynthesis. </font><font style="vertical-align: inherit;">This protein is similar to wheat flour and has been called "solein".</font></font></p>
            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">The company is currently collecting data on the food product to submit it to the European Union in order to obtain a food license, and it plans to start commercial production in the next year 2021. </font><font style="vertical-align: inherit;">The company has indicated that it is interested in producing environmentally friendly foods through the use of basic materials: electricity and carbon dioxide, and these foods will avoid the negative environmental impact of traditional agriculture, which includes everything from the use of land and water to emissions resulting from fertilizing crops or raising animals.</font></font></p>
            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">As such, microbe-derived proteins will:</font></font></p>
            <ul>
            <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">It provides a possible solution in light of the increasing future global demand for food</font></font></li>
            <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Food factories of the future are expanding to be more efficient and sustainable</font></font></li>
            <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">It will be able to provide food for the astronauts on their travel to Mars and all the inhabitants of the planet Earth in the year 2050 AD</font></font></li>
            </ul>
            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Imagine that microbes will be the factories of the future, and that the food of the future will be made of air! </font><font style="vertical-align: inherit;">And that the year 2050 AD will be completely different from our world today. </font><font style="vertical-align: inherit;">It is a world without agriculture or raising animals for food! </font><font style="vertical-align: inherit;">It may sound fancy, but it's not impossible!</font></font></p>
        </article>

        <nav class="blog-pagination" aria-label="Pagination">
            <a class="btn btn-outline-primary rounded-pill" href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Older posts</font></font></a>
            <a class="btn btn-outline-secondary rounded-pill disabled"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Latest Posts</font></font></a>
        </nav>

        </div>

        <div class="col-md-4">
        <div class="position-sticky" style="top: 2rem;">
            <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Around</font></font></h4>
            <p class="mb-0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">You came, so life came with you in all its varieties and colors: plants sprout, trees leaf and bloom, cats meow, the moon cries, sheep bleat, cows moo, and every pet calls on its pet. </font><font style="vertical-align: inherit;">Everything feels alive and forgets the worries of life, and only mentions the happiness of life. If time is a body, you are its soul, and if it is a lifetime, you are its youth.</font></font></p>
            </div>

            <div class="p-4">
            <h4 class="fst-italic"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">archives</font></font></h4>
            <ol class="list-unstyled mb-0">
                <li><a href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">March 2021</font></font></a></li>
                <li><a href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">February 2021</font></font></a></li>
                <li><a href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">January 2021</font></font></a></li>
                <li><a href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">December 2020</font></font></a></li>
                <li><a href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">November 2020</font></font></a></li>
                <li><a href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">October 2020</font></font></a></li>
                <li><a href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">September 2020</font></font></a></li>
                <li><a href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">August 2020</font></font></a></li>
                <li><a href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">July 2020</font></font></a></li>
                <li><a href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">June 2020</font></font></a></li>
                <li><a href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">May 2020</font></font></a></li>
                <li><a href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">April 2020</font></font></a></li>
            </ol>
            </div>

            <div class="p-4">
            <h4 class="fst-italic"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">in another place</font></font></h4>
            <ol class="list-unstyled">
                <li><a href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GitHub</font></font></a></li>
                <li><a href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Twitter</font></font></a></li>
                <li><a href="#"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Facebook</font></font></a></li>
            </ol>
            </div>
        </div>
        </div>
    </div>

    </main>
  )
}

export default Listing