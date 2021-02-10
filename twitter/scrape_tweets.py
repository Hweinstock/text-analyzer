import snscrape.modules.twitter as sntwitter
import pandas as pd


def scrape_recent_tweets(username, max_tweets=1000):
    df_rows = []
    query = 'from:'+username
    query_results = sntwitter.TwitterSearchScraper(query).get_items()

    for i, tweet in enumerate(query_results):
        if i > max_tweets:
            break

        row = {
            "author": username,
            "source": "twitter_scraper",
            "label": "tweet",
            "text": tweet.content,
            "date": tweet.date
        }

        df_rows.append(row)

    tweets = pd.DataFrame(df_rows)

    return tweets


if __name__ == "__main__":
    tweet_df = scrape_recent_tweets("AOC")
