import re
from twitter.main import read_in_top_users, tweets_from_handle
from text_model.analyzer.text_objects.tweet import Tweet
import json
import requests


def clean_tweet(tweet):
    tweet = re.sub(r'http\S+', '', tweet)
    tweet = re.sub(r'RT ', '', tweet)
    return tweet


def text_from_user(handle):
    tweets = tweets_from_handle(handle)
    cleaned_tweets = [clean_tweet(tw) for tw in tweets]

    return cleaned_tweets


def preload_users(users=None):
    if users is None:
        users = read_in_top_users()

    user_vectors = []

    for user in users:
        # Combine all text from user.
        full_text = " ".join(text_from_user(user))
        text_obj = Tweet(full_text, raw_text=True, author=user)

        # Sort out ones that don't have enough.
        if text_obj.valid:
            user_vectors.append({"author": user,
                                 "text": full_text})

    for vector in user_vectors:
        author = vector["author"]
        # First check if data already exists in db.
        get_data = {"author": author}

        first_response = requests.get('http://127.0.0.1:8000/api/text/doesExist/', params=get_data)
        query_result = json.loads(first_response.content)

        already_posted = query_result['status']

        if not already_posted:

            print("Adding " + author + " to db...")
            # If it can't find that author, add them to the db
            post_data = vector.copy()
            post_data["source"] = "pre_loaded"
            post_data["label"] = "tweet"

            response = requests.post('http://127.0.0.1:8000/api/text/', data=post_data)

            if response.status_code == 201:
                print("Successfully added " + author + " to db!")


if __name__ == "__main__":
    preload_users()