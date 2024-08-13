function hindiToJS(code) { return code
        // Variable Declarations
        .replace(/यह/g, 'const') .replace(/चर/g, 'var') 
        .replace(/ये/g, 'let')
        // Functions and Control Structures
        .replace(/कार्य/g, 'function') .replace(/अगर/g, 
        'if') .replace(/वरना/g, 'else') 
        .replace(/के_लिए/g, 'for') .replace(/जबतक/g, 
        'while') .replace(/स्विच/g, 'switch') 
        .replace(/स्थिति/g, 'case') .replace(/डिफ़ॉल्ट/g, 
        'default')
        // Error Handling
        .replace(/कोशिश/g, 'try') .replace(/पकड़/g, 
        'catch') .replace(/अंततः/g, 'finally')
        // Common Statements
        .replace(/लौटा/g, 'return') .replace(/लिखो/g, 
        'console.log') .replace(/सत्य/g, 'true') 
        .replace(/असत्य/g, 'false')
        // Objects and Arrays
        .replace(/वस्तु/g, 'object') .replace(/सूची/g, 
        'array') .replace(/मानचित्र/g, 'map') 
        .replace(/समूह/g, 'set') .replace(/प्राप्त/g, 'get') 
        .replace(/सेट/g, 'set')
        // Additional Features
        .replace(/नया/g, 'new')
        // Input/Output
        .replace(/इनपुट/g, 'prompt');
}
function runHindiScript(code) { const jsCode = 
    hindiToJS(code); eval(jsCode);
}
module.exports = { runHindiScript };
