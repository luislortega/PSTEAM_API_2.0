# PSTEAM_API_2.0

**Authors:** luislortega & SayGus

**Description:** Security for PSTEAM 2.0

**User model:**

* username.
* password.
* expiration.
* pin.                    <= update every two days
* imei.

**Implementation of HASH MD5:**

* The MD5 message-digest algorithm is a widely used hash function producing a 128-bit hash value. Although MD5 was initially designed to be used as a cryptographic hash function, it has been found to suffer from extensive vulnerabilities. It can still be used as a checksum to verify data integrity, but only against unintentional corruption. It remains suitable for other non-cryptographic purposes, for example for determining the partition for a particular key in a partitioned database.

**To Do in the next update:**

* Token verification Weekly or monthly