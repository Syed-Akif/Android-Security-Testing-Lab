# Burp Observations (example)

- Intercepted /api/users/1234 returned sensitive details - try changing ID to test for IDOR.
- Found plain HTTP endpoints in some requests (no TLS) - mark as insecure communication.
- Watch for verbose stack traces in responses - they may reveal server internals.
