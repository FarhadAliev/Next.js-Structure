

/**
 * Commitlint Configuration for Developers
 *
 * This configuration enforces consistent commit message formatting
 * and provides a set of predefined commit types.
 * Developers should adhere to these rules when writing commit messages.
 *
 * Rules:
 * - Body should have a leading blank line
 * - Maximum line length for the body is 100 characters
 * - Footer should have a leading blank line
 * - Maximum line length for the footer is 100 characters
 * - Maximum length of the entire commit message is 100 characters
 * - Scope should be in lower case
 * - Subject should not be in sentence case, start case, pascal case, or upper case
 * - Subject should not be empty
 * - Subject should not end with a period
 * - Commit type should be in lower case and should be one of the predefined types
 */


/**
 *
 * Example : git commit -m "ci: Update build configuration for improved performance"
 *
 * */





module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'body-leading-blank': [1, 'always'],
        'body-max-line-length': [2, 'always', 100],
        'footer-leading-blank': [1, 'always'],
        'footer-max-line-length': [2, 'always', 100],
        'header-max-length': [2, 'always', 100],
        'scope-case': [2, 'always', 'lower-case'],
        'subject-case': [
            2,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
        ],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'type-enum': [
            2,
            'always',
            [
                'build',        // Changes that affect the build system or external dependencies
                'chore',        // Other changes that don't modify src or test files
                'ci',           // Changes to our CI configuration files and scripts
                'docs',         // Documentation only changes
                'feat',         // A new feature
                'fix',          // A bug fix
                'perf',         // A code change that improves performance
                'refactor',     // A code change that neither fixes a bug nor adds a feature
                'revert',       // Reverts a previous commit
                'style',        // Changes that do not affect the meaning of the code (white-space, formatting, etc)
                'test',         // Adding missing tests or correcting existing tests
                'translation',  // Changes related to translation or localization
                'security',     // Changes that address security vulnerabilities
                'changeset'     // Changeset-related changes (e.g., version bumps, changelog updates)
            ],
        ],
    },
};
