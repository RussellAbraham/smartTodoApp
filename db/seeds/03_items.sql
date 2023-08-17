-- Insert items for user 1
INSERT INTO items (description, checked, user_id, category_id)
VALUES
    ('Watch movie "Inception"', FALSE, 1, 1),
    ('Read book "The Great Gatsby"', FALSE, 1, 3),
    ('Buy groceries', FALSE, 1, 4),
    ('Visit new restaurant downtown', FALSE, 1, 2);

-- Insert items for user 2
INSERT INTO items (description, checked, user_id, category_id)
VALUES
    ('Watch TV series "Stranger Things"', FALSE, 2, 1),
    ('Read book "Dune"', FALSE, 2, 3),
    ('Buy gifts for family', FALSE, 2, 4),
    ('Try cooking a new recipe', FALSE, 2, 2);

-- Insert items for user 3
INSERT INTO items (description, checked, user_id, category_id)
VALUES
    ('Explore local hiking trails', FALSE, 3, 1),
    ('Read book "The Hobbit"', FALSE, 3, 3),
    ('Order gardening supplies', FALSE, 3, 4),
    ('Dine out at a fancy restaurant', FALSE, 3, 2);

-- Insert items for user 4
INSERT INTO items (description, checked, user_id, category_id)
VALUES
    ('Watch documentary "Planet Earth"', FALSE, 4, 1),
    ('Read book "1984"', FALSE, 4, 3),
    ('Shop for home decor', FALSE, 4, 4),
    ('Try a new coffee shop', FALSE, 4, 2);
