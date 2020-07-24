import React from "react"

const EventsComponent = () => {
  const twitterFeed = () => {
    return {
      __html: `<a class="twitter-timeline" data-height="380" href="https://twitter.com/briankhchung/lists/csuf-events?ref_src=twsrc%5Etfw"></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`,
    }
  }
  return <div dangerouslySetInnerHTML={twitterFeed()}></div>
}

export default EventsComponent
