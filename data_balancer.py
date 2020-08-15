from imblearn.over_sampling import SMOTE
import pandas as pd


def balance_data(csv_file):
    # for reproducibility
    seed = 100

    # SMOTE number of neighbors
    k = 1

    df = pd.read_csv(csv_file)[["top_n_word_comparison",
                                   "average_word_length_comparison",
                                   "top_n_sentence_lengths_comparison",
                                   "punctuation_comparison",
                                   'same_author']]

    # Remove Dead Data i.e NaN
    df = df.fillna(method='ffill')

    # Separate what is being used to predict and what is being predicted.

    X = df.loc[:, df.columns != 'same_author']
    y = df.same_author
    print("Applying SMOTE to balance dataset...")
    over_sampler = SMOTE(sampling_strategy='auto',
                         k_neighbors=k,
                         random_state=seed)

    # over sample the data
    X_res, y_res = over_sampler.fit_resample(X, y)

    # Merge it back into a dataframe
    df = pd.concat([pd.DataFrame(X_res), pd.DataFrame(y_res)], axis=1)

    # Write back out to csv
    print("Writing back out to csv...")
    df.to_csv(csv_file, index=False, encoding='utf-8')
    print("*Success*")

