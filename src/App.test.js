import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App, { validateUrl } from './App';


describe('Load main page', () => {
  it('should display the "Create short URL" label text', () => {
    render(<App />);
    expect(screen.getByText('Create short URL')).toBeInTheDocument();
  });

  it('should display the domain name text: 00h.ca', () => {
    render(<App />);
    expect(screen.getByText('00h.ca')).toBeInTheDocument();
  });

  it('should display the subtitle text: "URL shortner"', () => {
    render(<App />);
    expect(screen.getByText('URL shortner')).toBeInTheDocument();
  });
});


describe('When a URL is submited', () => {
  it('should have the expected error response data structure', () => {
    const invalid_url = "badurl";
    const response = validateUrl(invalid_url);
    const expected_response = {"text": "Please enter a valid URL", "valid": false};
    expect(response).toStrictEqual(expected_response);
  })

  it('should fail if URL has less than 6 characters', () => {
    const invalid_url = "badurl";
    const response = validateUrl(invalid_url);
    expect(response.valid).toBe(false);
  })

  it('should fail if URL invalid schema', () => {
    const invalid_url = "ssh://example.com";
    const response = validateUrl(invalid_url);
    const expected_error_message = "Invalid URL. We only accept: ftp, http and https schemas";
    expect(response.valid).toBe(false);
    expect(response.text).toBe(expected_error_message);
  })

  it('should pass if has valid schemas: http, https or ftp', () => {
    expect(validateUrl("http://example.com").valid).toBe(true);
    expect(validateUrl("ftp://example.com").valid).toBe(true);
    expect(validateUrl("https://example.com").valid).toBe(true);
  })

  it('should have the expected response data structure for valid URLs', () => {
    const valid_url = "https://example.com";
    const response = validateUrl(valid_url);
    const expected_response = {"text": "", "valid": true};
    expect(response).toStrictEqual(expected_response);
  })
})