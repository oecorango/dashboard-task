import { BASE_URL, SITES, TESTS } from "../constants/api";
import { Site, Test } from "../interface";



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
      const site = sites.find((site) => site.id === id)

      return {
        id: test.id,
        name: test.name,
        type: test.type,
        status: test.status,
        site: site ? site.url : 'Site not found',
        siteId: site ? site.id : 1,
        results: false
      }
    });
    console.log(data)
    return data;

  } catch (err) {
    console.warn(err)
  }
  return null;
}
