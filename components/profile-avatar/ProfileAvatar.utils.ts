export function getInitials(name?:string) {
    if(!name) return ""
    const words = name.split(' ');
    const initials = words.map(word => word[0].toUpperCase()).join('');
    return initials;
  }
  