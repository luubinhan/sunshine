/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from "react";

let inlinedStyles = "";
if (process.env.NODE_ENV === "production") {
  try {
    /* eslint import/no-webpack-loader-syntax: off */
    inlinedStyles = require("!raw-loader!../public/styles.css");
  } catch (e) {
    /* eslint no-console: "off" */
    console.log(e);
  }
}

export default class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        />
      );
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />  
          <link rel="stylesheet" type="text/css" href="https://shopmattroinho.com/css/ionicons.min.css" />
          <link rel="shortcut icon" href='https://shopmattroinho.com/favi.png' />
          {css}
        </head>
        <body>
          <div className="fb-customerchat" page_id="568440183548995" minimized="true" />
          <div className="zalo-chat-widget" data-oaid="271604692846173383" data-welcome-message="Rất vui khi được hỗ trợ bạn!" data-autopopup="0" data-width="350" data-height="420" />

          <script src="https://sp.zalo.me/plugins/sdk.js" />
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
