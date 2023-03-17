import { extractFromHtml } from '@extractus/article-extractor'

const input = 'https://www.cnbc.com/2022/09/21/what-another-major-rate-hike-by-the-federal-reserve-means-to-you.html'

const extractText = async () => {
// here we use top-level await, assume current platform supports it
try {
const article = await extractFromHtml(input)
console.log(article)
} catch (err) {
console.error(err)
}

}

export default extractText;
