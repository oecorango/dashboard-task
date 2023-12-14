import { BASE_URL, SITES, TESTS } from "../constants/api";
import { Site, Status, Test } from "../interface";
import { sliceURL } from "../utils";

export const fetchTestsData = async () => {
  try {
    const responseTest = await fetch(`${BASE_URL}/${TESTS}`, {
      method: 'GET',
    });
    const tests: Test[] = await responseTest.json();

    const responseSite = await fetch(`${BASE_URL}/${SITES}`, {
      method: 'GET',
    });
    const sites: Site[] = await responseSite.json();

    const data = tests.map((test) => {
      const id = test.siteId;
      const site = sites.find((site) => site.id === id);
      const results = test.status === 'DRAFT' ? false : true
      const statusSort = (status: Status) => {
        if (status === 'ONLINE') return 1;
        if (status === 'PAUSED') return 2;
        if (status === 'STOPPED') return 3;
        return 4
      }

      return {
        id: test.id,
        name: test.name,
        type: test.type,
        status: test.status,
        statusSort: statusSort(test.status),
        site: site ? sliceURL(site.url) : 'Site not found',
        siteId: site ? site.id : 1,
        results,
      }
    });

    return data;

  } catch (err) {
    console.warn(err)
  }
  return null;
}

export const fetchTest = async (id: string) => {
  try {
    const responseTest = await fetch(`${BASE_URL}/${TESTS}/${id}`, {
      method: 'GET',
    });
    const test: Test = await responseTest.json();

    const responseSite = await fetch(`${BASE_URL}/${SITES}`, {
      method: 'GET',
    });
    const sites: Site[] = await responseSite.json();

    const idTest = test.siteId;
    const site = sites.find((site) => site.id === idTest);
    const results = test.status === 'DRAFT' ? false : true
    const statusSort = (status: Status) => {
      if (status === 'ONLINE') return 1;
      if (status === 'PAUSED') return 2;
      if (status === 'STOPPED') return 3;
      return 4
    }

    return {
      id: test.id,
      name: test.name,
      type: test.type,
      status: test.status,
      statusSort: statusSort(test.status),
      site: site ? sliceURL(site.url) : 'Site not found',
      siteId: site ? site.id : 1,
      results,
    }

  } catch (err) {
    console.warn(err)
  }
  return null;
}
