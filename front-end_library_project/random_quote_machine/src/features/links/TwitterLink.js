import React from 'react';
import './TwitterLink.css';
import {Helmet} from "react-helmet";

export function TwitterLink() {
  return (
    <div className="quote__link">
      <a
        id="tweet-quote"
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        class="twitter-share-button"
        data-show-count="false"
      >
        Tweet this quote
      </a>
      <Helmet>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </Helmet>
    </div>
  )
};
