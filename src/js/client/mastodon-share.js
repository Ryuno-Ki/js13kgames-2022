/**
 * Share text on Mastodon
 *
 * @argument {string} text
 * @argument {string} instanceAddress
 */
export function mastodonShare (text, instanceAddress) {
  const url = `${instanceAddress}/share?text=${text}`;
  window.open(url, '__blank');
}
