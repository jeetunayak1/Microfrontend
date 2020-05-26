
export function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => (
      location.href.indexOf(`${location.origin}/${prefix}`) !== -1
    )
  )
}

export function navbar(location) {
  // The navbar is always active
  return true;
}

export function application_1(location) {
  return prefix(location, 'application_1');
}

export function application_2(location) {
  return prefix(location, 'application_2');
}
