export function countCharactersFromMarkdown(markdown){
    let trimmed_markdown = markdown.replace(/\[?http.+?[\]\s]/g, "");
    trimmed_markdown = trimmed_markdown.replace(/\(\/\/images.+?\)/g, "");
    trimmed_markdown = trimmed_markdown.replace(/`{3}(.|\n|\r\n)+?`{3}/g, "");
    trimmed_markdown = trimmed_markdown.replace(/\s+/g, "");
    return trimmed_markdown.length;
}

export function getReadingTimeFromMarkdown(markdown){
    return Math.ceil(countCharactersFromMarkdown(markdown)/600);
}