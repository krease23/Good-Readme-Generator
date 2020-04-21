function generateMarkdown(answers) {
  return `# ${answers.Project}
      ${answers.Description} 
      
     ${answers.Installation}
    
    ${answers.Usage}
    
    ${answers.Contributors}
    
    *${answers.License}* 
    
    *${answers.Test}*
    
    `;
}

exports.generateMarkdown = generateMarkdown;
