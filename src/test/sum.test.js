import {getAllVideoGamesGenre, sum} from "../services/VideoGameService";

test('adds 1 + 2 to equal 3', () => {

    expect(sum(1, 2)).toBe(3);
});


test('get all video games genre', () => {

    expect(getAllVideoGamesGenre()).toContainEqual("JRPG",);
});

