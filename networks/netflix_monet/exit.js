this.exit = function(clickTag, url) {
  console.log("Network -> NETFLIX_MONET EXIT");
  try {
    Monet.adExit(url);
  } catch (e) {}
  if (typeof clickTag == "function") clickTag.call(this, url);
  else
    throw new Error(
      "ERROR: clickTag for this platform needs to be a callable function. See <Network> docs."
    );
};
